import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './Component/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Footer from './Component/Footer';
import Home from './Component/Home';
import ProductDetail from './Component/detailProduct/ProductDetail';
import Login from './Component/Login';
import CartPage from './Component/cartProduct/CartPage';
import SettingsScreen from './Component/setting/SettingsScreen';
import Register from './Component/Register';
import RegisterSuccess from './Component/RegisterSuccess';
// import ProductJewelery from './Component/category/ProductJewelery';
import PhoneCategory from './Component/category/Category';
import PaymentScreen from './Component/payment/PaymentScreen';
import PaymentSuccess from './Component/payment/PaymentSuccess';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CartPage" component={CartPage} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} />
        <Stack.Screen name="Category" component={PhoneCategory} />
        {/* <Stack.Screen name="Category" component={ProductJewelery} /> */}
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;