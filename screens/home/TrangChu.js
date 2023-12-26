import Header from '../home/Header.js';
import React from 'react';
import { StyleSheet, View, Image, FlatList, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const product = [
  { id: '1', name: 'Trà cam', source: require('../../assets/images/hinh1.jpg') },
  { id: '2', name: 'Trà sữa trái cây', source: require('../../assets/images/hinh2.jpg') },
  { id: '3', name: 'Trà sữa chân châu đường đen', source: require('../../assets/images/hinh3.jpg') },
  { id: '4', name: 'Trà sữa chân châu', source: require('../../assets/images/hinh4.jpg') },
  { id: '5', name: 'Trà sữa kem dâu', source: require('../../assets/images/hinh5.jpg') },
  { id: '6', name: 'Hồng trà', source: require('../../assets/images/hinh6.jpg') },
];

export default function TrangChu({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Chitiet', { item })}
      style={styles.itemContainer}
    >
      <Image source={item.source} style={styles.image} />
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.trangchu}>
      <Header />
      <Image
        style={styles.banner}
        source={require('../../assets/images/slider.png')}
      />
      <Text style={styles.title}>Sản phẩm</Text>
      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />

    </View>
  );
}
const styles = StyleSheet.create({
  trangchu: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
  banner: {
    width: 380,
    height: 200,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    padding: 10,
  },
  icon: {
    marginRight: 20,
  },
});
