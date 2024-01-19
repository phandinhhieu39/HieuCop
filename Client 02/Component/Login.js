import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    const handleLoginPress = () => {
    // Chuyển đến trang "Home"
    navigation.navigate('Home');
  };
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('../assets/login.png')}
                    style={styles.image}
                />
                <TextInput
                    style={styles.input}
                    placeholder="User Name"
                    keyboardType="input your email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
               
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        color: 'gray',
        backgroundColor: '#ffff',
        margin:10,
        borderRadius: 20,
        height: 70,
        width: '70%',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
       
    },
    buttonUserName:{
justifyContent:'left',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 16,
    },
    text: {
        fontSize: 18,
        marginBottom: 16,
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '70%',
        marginTop:30,
        alignItems: 'center',
    },
    buttonSignInGoole: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '70%',
        marginTop:30,
        alignItems: 'center',
    },
    buttonSignInFaceBook: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '70%',
        marginTop:30,
        alignItems: 'center',
    },
    buttonText: {
        color: '#DDDDDD',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        padding: 16,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        color: '#888',
    },
});

export default Login;