import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalStyles} from '../styles/globalStyles';
import {useContext} from 'react';
import {MainContext} from '../context/MainContext';
import IconComponent from './IconComponent';
import {FabGroupProps} from '../interfaces/components';

const FabGroup = ({icons}: FabGroupProps) => {
  const {fabVisible, setFabVisible, loading} = useContext(MainContext);
  return (
    <View style={globalStyles.fabGroupContainer}>
      {fabVisible && (
        <View style={globalStyles.fabGroup3}>
          {icons.map((item, i) => (
            <IconComponent key={i} {...item} size={24} />
          ))}
        </View>
      )}
      <View style={globalStyles.fabContainerMain}>
        <Icon
          name={fabVisible ? 'close-outline' : 'add'}
          color="white"
          size={42}
          onPress={loading ? () => {} : setFabVisible}
        />
      </View>
    </View>
  );
};

export default FabGroup;
