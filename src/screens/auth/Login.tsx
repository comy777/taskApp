import React from 'react';
import {View, TextInput} from 'react-native';
import TextInputIcon from '../../components/TextInputIcon';
import {authStyles} from '../../styles/authStyles';
import useContextAuth from '../../hooks/useContextAuth';
import useForm from '../../hooks/useForm';
import BtnComponent from '../../components/BtnComponent';
import {AuthStackProps} from '../../interfaces/auth';
import useAuth from '../../hooks/useAuth';
import LoadingComponent from '../../components/LoadingComponent';

const Login = ({navigation}: AuthStackProps) => {
  const {visiblePassword, setVisiblePassword, loading} = useContextAuth();
  const {email, password, handleChange, loginApi} = useAuth();
  const hanldeNavigate = () => navigation.navigate('register');
  const login = async () => await loginApi({email, password});
  return (
    <View style={authStyles.container}>
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
      {loading && <LoadingComponent />}
      <BtnComponent
        style={authStyles.btnContainer}
        styleText={authStyles.btnText}
        title="Ingresar"
        onPress={login}
      />
      <BtnComponent
        title="Crear cuenta"
        styleText={{fontSize: 18}}
        onPress={hanldeNavigate}
      />
    </View>
  );
};

export default Login;
