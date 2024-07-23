import { View, Text, StyleSheet, Image, ScrollView, Button, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackPramList } from '../App'
import BottomSheetBestSeller from './BottomSheetBestSeller'
import { getBestSellerProductApi } from '../apiCall/productApi'
import Fontisto from "react-native-vector-icons/Fontisto";

type DetailsProps = NativeStackScreenProps<RootStackPramList,"Details">

const url ='https://www.myg.in/images/thumbnails/624/460/detailed/51/S24ULTRAGREY1.JPEG';

export default function Details({route}:DetailsProps) {
   
    const {product} = route.params
    const [isSheetVisible, setSheetVisible] = useState(false);
    const [data,setData] = useState([])

    useEffect(()=>{

      getBestSellerProductApi()
      .then((value:any)=>{
        setData(value)
      })
      .catch((err)=>{
        console.warn(err)
      })

    },[])

    const toggleSheet = () => {
      setSheetVisible(!isSheetVisible);
    };

  return (
    <View style={{flex:1}}>


      <View style={styles.card}>
      <Image source={{ uri: product.product_photo }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}> {product.product_title}</Text>
        <Text style={styles.price}>{product.product_price}</Text>
        <Text style={styles.rating}>Rating: {product.product_star_rating} ★</Text>
        <Text style={styles.stock}>{product.stock || 3} left in stock</Text>
      </View>
      </View>

      <TouchableOpacity style={{position:"absolute",bottom:5,width:'100%',backgroundColor:"black",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",}} onPress={toggleSheet}   >
        <Fontisto name='arrow-up' size={20} color={"white"}  />
         <Button title="Best seller Product" color={"black"} />
      </TouchableOpacity>

        {isSheetVisible && (

          <BottomSheetBestSeller
          snapPoints={['25%', '40%', '50%']}
          onChange={(index: any) => {}}
          data={data} children={undefined} 
          title={"Best Seller Products"}        
          />
          
        )}



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
    resizeMode:"contain"
  },
  infoContainer: {
    padding: 15
  },
  name: {
    fontSize: 15,
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