import React from 'react';
import { View, Text } from 'react-native';

const PaymentSuccess = ({ navigation }) => {
  return (
    <View>
      <Text>Đã mua hàng thành công!</Text>
      <Text onPress={() => navigation.navigate('Home')}>Về trang chủ</Text>
    </View>
  );
};

export default PaymentSuccess;