import AsyncStorage from '@react-native-async-storage/async-storage';

export const getTokenStorage = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token ? token : null;
  } catch (error) {
    console.log(error);
  }
};

export const saveTokenStorage = async (token: string) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTokenStorage = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {
    console.log(error);
  }
};
