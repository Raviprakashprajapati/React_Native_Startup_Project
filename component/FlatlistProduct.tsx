import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';
import {products} from './Home';
import {getProductDataApi} from '../apiCall/productApi';
import CustomLoader from '../utils/CustomLoader';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Carousel from './CarouselData';
import CarouselData from './CarouselData';

type FlatListProps = NativeStackScreenProps<RootStackPramList, 'List'>;

export default function FlatlistProduct({navigation}: FlatListProps) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    getProductDataApi()
      .then((value: any) => {
        setData(value);
        setLoading(true);
      })
      .catch(err => {
        console.warn(err);
        setLoading(true);
      });
  }, []);

  const handlePress = (itemId="B0CMTW9MVK") => {

    console.warn(itemId)
  }

  
  return (
    <ScrollView>
      <Text
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: 10,
          textAlign: 'center',
          marginHorizontal: 15,
          marginTop:15,
        }}>
         Product List
      </Text>

        <View>
        <CarouselData/>
        </View>

      <View style={{marginHorizontal:20,marginBottom: 100,marginTop:-18}}>
        {data.length > 0 && (
          <FlatList
            numColumns={1}
            data={data}
            keyExtractor={(i: any) => i.product_title}
            renderItem={({item}) => (
              <Pressable
                style={{backgroundColor: '#fff', margin: 15, padding: 20}}  >
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={{uri: item?.product_photo}}
                    style={{height: 110, width: 80, resizeMode: 'contain'}}
                  />
                  <View>
                    <Text style={{color: 'white',marginBottom:5,backgroundColor:"#10b1c9",padding:7,borderRadius:5,fontSize:12,fontWeight:"700",textAlign:"center"}}  >
                      Price : {item?.product_original_price}
                    </Text>
                    <Text style={{color: 'white',marginBottom:5,backgroundColor:"#10b1c9",padding:7,borderRadius:5,fontSize:12,fontWeight:"700",textAlign:"center"}} > Rating : {item?.product_star_rating}</Text>
                  </View>
                </View>
                <Text style={{color: 'black', fontSize: 12, marginTop: 5,}}>
                  {item?.product_title}
                </Text>
                <Text style={{backgroundColor:"#1a97ab" ,padding:5,marginHorizontal:10,textAlign:"center",marginTop:10, borderRadius:30,color:"white" }} onPress={()=>navigation.navigate("Review",{id:item.asin})} >Review</Text>
              </Pressable>
            )}
          />
        )}


      </View>
    </ScrollView>
  );
}
