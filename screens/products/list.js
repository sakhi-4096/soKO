import React from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native';

import ProductCard from './card'

var { width } = Dimensions.get("window");

const ProductList = (props) => {
    const { item } = props;
    return(
        <TouchableOpacity 
          style={{ width: '50%', padding: 5 }}
          onPress={() => 
            props.navigation.navigate("Product Detail", { item: item })
          }
        >

            <View style={{ width: width / 2, 
                backgroundColor: 'gainsboro'}}
        >
            <ProductCard {...item} />
            </View>
        </TouchableOpacity>
    );
}

export default ProductList;