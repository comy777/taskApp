import React, {useContext} from 'react';
import {View, Text, Modal} from 'react-native';
import {MainContext} from '../context/MainContext';
import {stylesComponent} from '../styles/componentStyles';
import IconComponent from './IconComponent';
import useFuctions from '../hooks/useFuctions';
import LoadingComponent from './LoadingComponent';

const ModalComponent = () => {
  const {modalVisible, setModalVisible, activeModal, loading, screen} =
    useContext(MainContext);
  const {handleEdit, handleDelete} = useFuctions();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={setModalVisible}>
      {activeModal && (
        <View style={stylesComponent.centeredView}>
          <View style={stylesComponent.modalView}>
            <Text style={stylesComponent.modalText}>
              {activeModal.task
                ? activeModal.task.title
                : activeModal.note?.title}
            </Text>
            {loading && <LoadingComponent />}
            <View style={{position: 'absolute', bottom: 10, right: 0, left: 0}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <IconComponent
                  icon="create-outline"
                  onPress={handleEdit}
                  size={28}
                />
                <IconComponent
                  icon="trash-outline"
                  onPress={async () => {
                    activeModal.task
                      ? handleDelete(activeModal.task._id)
                      : activeModal.note
                      ? handleDelete(activeModal.note._id)
                      : null;
                  }}
                  size={28}
                />
              </View>
            </View>
          </View>
        </View>
      )}
    </Modal>
  );
};

export default ModalComponent;
