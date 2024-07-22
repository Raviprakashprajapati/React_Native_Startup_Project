import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';
import {addToCart, removeFromCart} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';

export const products = [
  {
    id: 1,
    name: 'Samsung Galaxy S21',
    price: 69999,
    image: 'https://example.com/images/samsung-galaxy-s21.jpg',
    category: 'Electronics',
    rating: 4.5,
    stock: 15,
    description:
      'The latest Samsung Galaxy S21 with advanced features and sleek design.',
    brand: 'Samsung',
    color: 'Phantom Gray',
    size: '6.2 inches',
    weight: '169g',
  },
  {
    id: 2,
    name: 'Apple iPhone 13',
    price: 79999,
    image: 'https://example.com/images/iphone-13.jpg',
    category: 'Electronics',
    rating: 4.7,
    stock: 20,
    description:
      'Apple iPhone 13 with A15 Bionic chip and advanced camera system.',
    brand: 'Apple',
    color: 'Midnight',
    size: '6.1 inches',
    weight: '174g',
  },
  {
    id: 3,
    name: 'Sony WH-1000XM4 Headphones',
    price: 29999,
    image: 'https://example.com/images/sony-wh-1000xm4.jpg',
    category: 'Accessories',
    rating: 4.6,
    stock: 25,
    description: 'Industry-leading noise canceling wireless headphones.',
    brand: 'Sony',
    color: 'Black',
    batteryLife: '30 hours',
    connectivity: 'Bluetooth',
  },
  {
    id: 4,
    name: 'Dell XPS 13 Laptop',
    price: 99999,
    image: 'https://example.com/images/dell-xps-13.jpg',
    category: 'Computers',
    rating: 4.8,
    stock: 10,
    description:
      'High-performance laptop with 11th Gen Intel Core i7 processor.',
    brand: 'Dell',
    color: 'Silver',
    screenSize: '13.3 inches',
    weight: '1.2kg',
    storage: '512GB SSD',
    RAM: '16GB',
  },
  {
    id: 5,
    name: 'Nike Air Max 270',
    price: 8999,
    image: 'https://example.com/images/nike-air-max-270.jpg',
    category: 'Footwear',
    rating: 4.4,
    stock: 30,
    description: 'Comfortable and stylish sneakers for everyday wear.',
    brand: 'Nike',
    color: 'White/Black',
    size: 'Various',
    weight: '300g',
    material: 'Mesh',
  },
  {
    id: 6,
    name: 'LG 55-inch 4K Smart TV',
    price: 59999,
    image: 'https://example.com/images/lg-55-4k-tv.jpg',
    category: 'Home Appliances',
    rating: 4.5,
    stock: 8,
    description: '55-inch 4K Ultra HD Smart TV with HDR support.',
    brand: 'LG',
    color: 'Black',
    screenSize: '55 inches',
    weight: '18kg',
    features: ['Smart TV', 'HDR', 'Dolby Vision'],
  },
  {
    id: 7,
    name: 'KitchenAid Stand Mixer',
    price: 49999,
    image: 'https://example.com/images/kitchenaid-mixer.jpg',
    category: 'Kitchen Appliances',
    rating: 4.9,
    stock: 12,
    description: 'Versatile stand mixer for all your baking needs.',
    brand: 'KitchenAid',
    color: 'Red',
    weight: '10.6kg',
    power: '325W',
    attachments: ['Beater', 'Dough Hook', 'Whisk'],
  },
  {
    id: 8,
    name: 'Fossil Gen 5 Smartwatch',
    price: 22999,
    image: 'https://example.com/images/fossil-gen-5.jpg',
    category: 'Accessories',
    rating: 4.3,
    stock: 18,
    description:
      'Smartwatch with fitness tracking and customizable watch faces.',
    brand: 'Fossil',
    color: 'Black',
    batteryLife: '24 hours',
    connectivity: 'Bluetooth, Wi-Fi',
    compatibility: 'Android, iOS',
  },
  {
    id: 9,
    name: 'Canon EOS M50 Camera',
    price: 57999,
    image: 'https://example.com/images/canon-eos-m50.jpg',
    category: 'Cameras',
    rating: 4.6,
    stock: 10,
    description: 'Compact mirrorless camera with 24.1 MP APS-C sensor.',
    brand: 'Canon',
    color: 'Black',
    weight: '387g',
    lens: '15-45mm',
    connectivity: 'Wi-Fi, Bluetooth',
  },
  {
    id: 10,
    name: 'Herman Miller Aeron Chair',
    price: 99999,
    image: 'https://example.com/images/herman-miller-aeron.jpg',
    category: 'Furniture',
    rating: 4.7,
    stock: 5,
    description: 'Ergonomic office chair with adjustable lumbar support.',
    brand: 'Herman Miller',
    color: 'Graphite',
    weight: '20kg',
    material: 'Pellicle mesh',
    features: [
      'Adjustable lumbar support',
      'Tilt limiter',
      'Seat angle adjustment',
    ],
  },
];

const url = 'https://www.myg.in/images/thumbnails/624/460/detailed/51/S24ULTRAGREY1.JPEG';

type HomeProps = NativeStackScreenProps<RootStackPramList, 'Home'>;

export default function Home({navigation}: HomeProps) {

  const dispatch = useDispatch();
  const cartData = useSelector((state: any) => state.reducer);
  const [searchData,setSearchData] = useState('')

  function handleAddToCart(item: any) {
    dispatch(addToCart(item));
  }

  function handleRemoveTOCart(item: any) {
    dispatch(removeFromCart(item));
  }


  return (
    <View>

      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <Pressable
            onPress={() => navigation.navigate('Carts')}
            style={{position: 'relative'}}>
            <Text style={styles.button}>CART</Text>
            <Text style={styles.cartCount}>{cartData.length}</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.button}>Profile</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('List')}>
            <Text style={styles.button}>Products</Text>
          </Pressable>

          
        </View>

        <Pressable onPress={() => navigation.navigate('Deal')}>
            <Text style={[styles.button, {backgroundColor:"#fff",color:"black",textAlign:"center",fontWeight:"bold"}]}>Deal Products</Text>
          </Pressable>
      </View>

      <View style={{display:"flex",justifyContent:"center",alignItems:"center",margin:10}} >
        <Pressable>
          <TextInput placeholder='search product ...' style={styles.searchInput} value={searchData} onChangeText={(text)=>setSearchData(text)} />
        </Pressable>
      </View>

      <ScrollView>
        {
        products
        .filter((i)=>(
          searchData===""?i:
          i.name.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())
        ))
        
        .map(i => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Details', {product: i})}
            key={i.id}>
            <Image source={{uri: url}} style={styles.image} />
            <View>
              <Text
                style={{
                  fontSize: i.name.length > 19 ? 14 : 17,
                  fontWeight: 'bold',
                  color: '#777',
                }}>
                {i.name}
              </Text>
              <Text>Price : {i.price}</Text>
            </View>

            <Pressable
              style={styles.cartContainer}
              onPress={() =>
                cartData.some((item: any) => item.id === i.id)
                  ? handleRemoveTOCart(i)
                  : handleAddToCart(i)
              }>
              <View>
                <Text style={styles.cardButton}>
                  {cartData.some((item: any) => item.id === i.id) ? '-' : '+'}
                </Text>
              </View>
            </Pressable>
          </TouchableOpacity>

        ))}
      </ScrollView>

    </View>
  );
}



const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 20,
    shadowColor: 'black',
    elevation: 5,
    borderRadius: 20,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    // justifyContent:"space-",
    alignItems: 'center',
    position: 'relative',
  },
  searchInput:{
    borderWidth:1,
    borderColor:"grey",
    width:300,
    borderRadius:40,
    padding:10,
  },
  image: {
    width: '25%',
    height: 100,
    paddingHorizontal: 50,
    margin: 5,
  },
  infoContainer: {
    padding: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    color: '#E91E63',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  details: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: '#FF9800',
    marginBottom: 5,
  },
  stock: {
    fontSize: 14,
    color: '#4CAF50',
  },
  cartContainer: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  cardButton: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 15,
    borderRadius: 200,
    padding: 5,
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 15,
    shadowColor: 'black',
    elevation: 20,
  },
  cartCount: {
    position: 'absolute',
    top: 1,
    right: 1,
    backgroundColor: '#fff',
    color: 'black',
    padding: 8,
    borderRadius: 50,
    shadowColor: 'black',
    elevation: 20,
  },
});
