import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalStyles} from '../styles/globalStyles';
import useContextAuth from '../hooks/useContextAuth';
import useForm from '../hooks/useForm';
import BtnComponent from '../components/BtnComponent';
import {authStyles} from '../styles/authStyles';
import useAuth from '../hooks/useAuth';
import IconComponent from '../components/IconComponent';
import {stylesComponent} from '../styles/componentStyles';
import LoadingComponent from '../components/LoadingComponent';

const Settings = () => {
  const {
    user,
    editable,
    setBase64,
    imageUser,
    setImageUser,
    loading,
    setEditable,
  } = useContextAuth();
  const {handleEditable, handleImage} = useAuth();

  if (!user) return null;
  const {username, email, image} = user;

  const {usernameScreen, resetFormValues, handleChange} = useForm({
    usernameScreen: '',
  });

  useEffect(() => {
    resetFormValues({usernameScreen: user.username});
    setImageUser(image);
  }, [user]);

  const imageResponse = async (data: string) => {
    const resp = await handleImage(data);
    if (!resp) return;
    const {uri, base64} = resp;
    if (!uri) return;
    setImageUser(uri);
    if (!base64) return;
    setBase64(base64);
  };

  const handleCancel = () => {
    handleChange(username, 'usernameScreen');
    setImageUser(image);
    setEditable();
  };

  return (
    <KeyboardAvoidingView style={globalStyles.constinaer}>
      <ScrollView>
        <Text style={stylesComponent.textTitleSettings}>Task University</Text>
        <View style={stylesComponent.containerImageCenter}>
          {imageUser !== '' ? (
            <View style={stylesComponent.containerImage}>
              <Image
                source={{uri: imageUser}}
                style={stylesComponent.imageSettings}
              />
            </View>
          ) : (
            <Icon name="person-circle-outline" size={320} color="teal" />
          )}
          {editable && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 15,
              }}>
              <IconComponent
                icon="camera-outline"
                onPress={() => imageResponse('camera')}
                size={24}
              />
              <IconComponent
                icon="image-outline"
                onPress={() => imageResponse('galery')}
                size={24}
              />
              {imageUser !== '' && (
                <IconComponent
                  icon="close-outline"
                  onPress={() => setImageUser('')}
                  size={24}
                />
              )}
            </View>
          )}
        </View>
        <View>
          <TextInput
            placeholder="Nombres"
            value={usernameScreen}
            editable={editable}
            style={globalStyles.input}
            onChangeText={value => handleChange(value, 'usernameScreen')}
          />
          <TextInput
            placeholder="Email"
            value={email}
            editable={false}
            style={globalStyles.input}
          />
        </View>
        {loading && <LoadingComponent />}
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          {editable && (
            <BtnComponent
              title="Cancelar"
              onPress={handleCancel}
              style={{...globalStyles.btnsComponent, marginTop: 15}}
              styleText={globalStyles.btnsComponentText}
            />
          )}
          <BtnComponent
            title={editable ? 'Guardar' : 'Editar'}
            onPress={() => handleEditable(usernameScreen)}
            style={{...globalStyles.btnsComponent, marginTop: 15}}
            styleText={globalStyles.btnsComponentText}
          />
        </View>
        <BtnComponent
          title="Cerrar sesion"
          onPress={() => {}}
          style={{marginTop: 15}}
          styleText={authStyles.btnText}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Settings;
