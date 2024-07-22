import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackPramList } from '../App'
import { getProductDealsApi } from '../apiCall/productApi'

const { width } = Dimensions.get('window');

type DealProductProps = NativeStackScreenProps<RootStackPramList,"Deal"> 

// const deal:any = {
//   deal_title: 'Apple AirPods Max Wireless Over-Ear Headphones, Active Noise Cancelling, Transparency Mode, Personalized Spatial Audio, Dolby Atmos, Bluetooth Headphones for iPhone – Pink',
//   deal_photo: 'https://m.media-amazon.com/images/I/81NIpE9-5mL.jpg',
//   deal_state: 'AVAILABLE',
//   deal_url: 'https://www.amazon.com/New-Apple-AirPods-Max-Pink/dp/B08PZJ8FZ8',
//   deal_badge: '30% off',
//   deal_starts_at: '2024-07-22T07:00:00.000Z',
//   deal_ends_at: '2024-07-29T07:00:00.000Z',
// };

export default function DealProduct({navigation,route}: DealProductProps) {

  const [deal,setDeal] = useState([])

  useEffect(()=>{
    getProductDealsApi()
    .then((value:any)=>{
      setDeal(value)
    }).catch((err)=>{
      console.warn(err)
    })
  },[])

  const formatDate = (dateString:any) => {
    const options:any = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <ScrollView  >
      <Text style={{backgroundColor:"black",padding:10,color:"white",margin:20,textAlign:"center"}} >DealProduct</Text>

    <View style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginBottom:50}} >
    {
      deal.length>0 && deal.map((i:any,index)=>(
        <View style={styles.card} key={index}>
        <Image source={{ uri: i.deal_photo }} style={styles.image} />
        <View style={styles.content}>
          <Text style={[styles.title,{fontSize:13,textAlign:"justify"}]}>{i.deal_title} .{"  "} 
            <Text style={{color:"black",}} >{i.deal_badge}</Text>
          </Text>
          <Text style={[styles.dealState,{fontSize:13}]}>Deal : {i.deal_state}</Text>
          {/* <Badge value={deal.deal_badge} status="success" containerStyle={styles.badge} /> */}
          <View style={styles.dateContainer}>
            <Text style={[styles.dateText]}>Starts: {formatDate(i.deal_starts_at)}</Text>
            <Text style={[styles.dateText]}>Ends: {formatDate(i.deal_ends_at)}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(i.deal_url)}
          >
            <Text style={styles.buttonText}>View Deal</Text>
          </TouchableOpacity>
        </View>
      </View>
      ))
     }
    </View>



    </ScrollView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: width - 40,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 10,
    resizeMode:"contain"
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dealState: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  badge: {
    marginVertical: 10,
  },
  dateContainer: {
    marginBottom: 10,
  },
  dateText: {
    fontSize: 13,
    color: 'black',
    fontStyle:"italic"
  },
  button: {
    backgroundColor: 'black',
    padding: 6,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
