import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = () => {
    const navigation = useNavigation();
    const handlePaymentComplete = () => {
        // Xử lý việc mua hàng
        console.log('Chúc mừng bạn đã mua hàng thành công!');
        navigation.navigate('PaymentSuccess');
      };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Thanh toán</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Thông tin thanh toán</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Họ và tên"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Số điện thoại"
                        keyboardType="phone-pad"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Địa chỉ"
                    />
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Phương thức thanh toán</Text>
                    <TouchableOpacity style={styles.paymentMethod}>
                        <Text style={styles.paymentMethodText}>Thanh toán bằng thẻ ngân hàng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.paymentMethod}>
                        <Text style={styles.paymentMethodText}>Thanh toán khi nhận hàng</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={handlePaymentComplete}>
                    <Text style={styles.buttonText}>Hoàn tất thanh toán</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#f5f5f5',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    paymentMethodText: {
        marginLeft: 10,
        fontSize: 16,
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 5,
        paddingVertical: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default PaymentScreen;