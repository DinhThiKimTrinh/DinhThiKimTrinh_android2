import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ChiTiet = ({ route }) => {
  const navigation = useNavigation();
  const { product = {} } = route.params;

  const [quantity, setQuantity] = useState(product.quantity || 0);
  const pricePerItem = 10; // Replace with the actual price per item

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const Cart = () => {
    // Navigate to the "Register" screen
    navigation.navigate('Cart');
  };

  if (!product) {
    return (
      <View>
        <Text>Chi tiết sản phẩm không khả dụng</Text>
      </View>
    );
  }

  const totalPrice = quantity * pricePerItem;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text>Tên sản phẩm: {product.name}</Text>
        <Text>Số lượng: {quantity}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.iconContainer}>
            <Icon name="minus" size={16} color="black" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.iconContainer}>
            <Icon name="plus" size={16} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.blkackPriceText}>Thành tiền: <Text style={styles.boldBlackText}>${totalPrice}</Text></Text>
        </View>
        <TouchableOpacity style={styles.cartIconContainer} onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-cart" size={30} color="green" />
          
        </TouchableOpacity>
        <View style={styles.iconGroup2}>
        <Icon name="share" size={30} color="green" />
      </View>
      </View>
      <View style={styles.iconGroup}>
        <Icon name="home" size={30} color="white" />
        <Icon name="bars" size={30} color="white" />
        <Icon name="shopping-cart" size={30} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  iconContainer: {
    padding: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  totalPriceText: {
    color: 'white',
    fontSize: 20,
  },
  boldBlackText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
  cartIconContainer: {
    padding: 10,
    top: -570,
    right: -60,
  },
  iconGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    padding: 10,
  },
  iconGroup2: {
    padding: 10,
    top:-570,
  },
});

export default ChiTiet;
