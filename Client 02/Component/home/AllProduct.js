import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput, Button } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getAllProduct();
  }, []);

  const navigation = useNavigation();

  const getAllProduct = async () => {
    try {
      const response = await axios.get('https://api.escuelajs.co/api/v1/products');
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const navigateToProductDetail = (item) => {
    navigation.navigate('ProductDetail', { item });
  };

  const renderProduct = ({ item, navigation }) => (
    <TouchableOpacity style={styles.productItem} onPress={() => navigateToProductDetail(item)}>
      <Image source={{ uri: item.images[0] }} style={styles.productImage} resizeMode="cover" />
      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Nhập từ khóa tìm kiếm"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <Button title="Tìm kiếm" onPress={handleSearch} />
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => renderProduct({ item, navigation })}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 8,
  },
  productItem: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    marginHorizontal: 5,
  },
  productImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  productName: {
    color: 'black',
    textAlign: 'center',
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 16,
  },
  productPrice: {
    color: 'black',
    textAlign: 'center',
    marginBottom: 4,
    fontSize: 14,
  },
  productList: {
    paddingHorizontal: 5,
  },
});

export default AllProduct;