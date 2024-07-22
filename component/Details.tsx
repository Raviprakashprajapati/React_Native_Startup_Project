import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackPramList } from '../App'


type DetailsProps = NativeStackScreenProps<RootStackPramList,"Details">

const url ='https://www.myg.in/images/thumbnails/624/460/detailed/51/S24ULTRAGREY1.JPEG';

export default function Details({route}:DetailsProps) {
   
   
    const {product} = route.params

  return (
    <View>

      <View style={styles.card}>
      <Image source={{ uri: url }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}> {product.name}</Text>
        <Text style={styles.price}>₹ {product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.details}>Brand: {product.brand}</Text>
        <Text style={styles.details}>Color: {product.color}</Text>
        <Text style={styles.rating}>Rating: {product.rating} ★</Text>
        <Text style={styles.stock}>{product.stock} left in stock</Text>
      </View>
    </View>
    </View>
  )
}



const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    margin: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200,
    margin:5,
  },
  infoContainer: {
    padding: 15
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  price: {
    fontSize: 18,
    color: '#E91E63',
    marginBottom: 5
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10
  },
  details: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5
  },
  rating: {
    fontSize: 14,
    color: '#FF9800',
    marginBottom: 5
  },
  stock: {
    fontSize: 14,
    color: '#4CAF50'
  }
});