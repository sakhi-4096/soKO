import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';

import ProductList from './list'

const data = require('../../assets/data/products.json');

const ProdductContainer = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //console.log(data); // Log the data array to the console
    setProducts(data);
    
    return () => {
      setProducts([]);
  };
}, []);
  return (
    <View>
      <Text>Product Container</Text>
      <View style={{ marginTop: 100 }}>
      <FlatList
          horizontal
          data={products}
          renderItem={({item}) => <ProductList
          navigation={navigation}
          key={item.id}
          item={item}/>}
          keyExtractor={(item) => item.name}
      />
      </View>
    </View>
  )
}

export default ProdductContainer;