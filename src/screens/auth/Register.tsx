import {View, TextInput, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {authStyles} from '../../styles/authStyles';
import TextInputIcon from '../../components/TextInputIcon';
import BtnComponent from '../../components/BtnComponent';
import useAuth from '../../hooks/useAuth';
import useContextAuth from '../../hooks/useContextAuth';
import LoadingComponent from '../../components/LoadingComponent';

const Register = () => {
  const {email, password, username, repeatPassword, handleChange, registerApi} =
    useAuth();
  const {visiblePassword, setVisiblePassword, loading} = useContextAuth();
  const handleRegister = async () =>
    registerApi({username, email, password, repeatPassword});
  return (
    <KeyboardAvoidingView style={authStyles.container}>
      <View>
        <TextInput
          style={authStyles.input}
          placeholderTextColor="teal"
          placeholder="Nombres"
          value={username}
          onChangeText={value => handleChange(value, 'username')}
        />
        <TextInput
          style={authStyles.input}
          placeholderTextColor="teal"
          placeholder="Correo electronico"
          value={email}
          onChangeText={value => handleChange(value, 'email')}
        />
        <TextInputIcon
          icon={visiblePassword ? 'eye-outline' : 'eye-off-outline'}
          size={24}
          onPress={setVisiblePassword}
          securityPassword={visiblePassword}
          onChange={value => handleChange(value, 'password')}
          value={password}
        />
        <TextInput
          style={authStyles.input}
          placeholderTextColor="teal"
          placeholder="Repetir contraseña"
          value={repeatPassword}
          onChangeText={value => handleChange(value, 'repeatPassword')}
          secureTextEntry={visiblePassword}
        />
        {loading && <LoadingComponent />}
        <BtnComponent
          style={authStyles.btnContainer}
          styleText={authStyles.btnText}
          title="Crear cuenta"
          onPress={handleRegister}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
