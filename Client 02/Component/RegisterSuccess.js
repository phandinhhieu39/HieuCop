import React from 'react';
import { View, Text } from 'react-native';

const RegisterSuccess = ({ navigation }) => {
  return (
    <View>
      <Text>Đăng ký thành công!</Text>
      <Text onPress={() => navigation.navigate('Login')}>Đăng nhập ngay</Text>
    </View>
  );
};

export default RegisterSuccess;