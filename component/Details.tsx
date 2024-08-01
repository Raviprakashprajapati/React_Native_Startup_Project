import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';
import BottomSheetBestSeller from './BottomSheetBestSeller';
import {getBestSellerProductApi} from '../apiCall/productApi';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImageView from 'react-native-image-viewing';
import Share from 'react-native-share';

type DetailsProps = NativeStackScreenProps<RootStackPramList, 'Details'>;

const url ='https://www.myg.in/images/thumbnails/624/460/detailed/51/S24ULTRAGREY1.JPEG';

const ProductImagesUrl = [
  {
    uri: 'https://www.myg.in/images/thumbnails/624/460/detailed/51/S24ULTRAGREY1.JPEG',
  },
  {uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34'},
  {uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4'},
];

export default function Details({route}: DetailsProps) {

  const {product} = route.params;
  const [isSheetVisible, setSheetVisible] = useState(false);
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  const shareProduct = () => {
    const options = {
      title: 'Share Product',
      message: 'check out this product ' + product.product_title,
      url: product.product_photo,
    };

    Share.open(options)
    .then((res)=>{
      // console.warn(res)
    })
    .catch((err)=>{
      if(err){ console.warn(err) }
    } )

  };

  useEffect(() => {
    getBestSellerProductApi()
      .then((value: any) => {
        setData(value);
      })
      .catch(err => {
        console.warn(err);
      });
  }, []);

  const toggleSheet = () => {
    setSheetVisible(!isSheetVisible);
  };

  return (
    <View style={{flex: 1}}>

      <View style={styles.card}>
        <Image source={{uri: product.product_photo}} style={styles.image} />
        <FontAwesome
          name="share"
          size={17}
          style={{position: 'absolute', right:5, top:13}}
          color={'black'}
          onPress={shareProduct}
        />

        <Pressable
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0e6ec',
            padding: 5,
            marginHorizontal: 15,
            marginVertical: 10,
            borderRadius: 20,
            gap: 10,
            borderColor:"pink",
            borderWidth:.7
          }}
          onPress={() => setVisible(true)}>
          <FontAwesome6 name="images" size={20} color={'#960b5e'} />
          <Text style={{textAlign: 'center', color: '#960b5e'}}>
            View the Images
          </Text>
        </Pressable>

        <ImageView
          images={ProductImagesUrl}
          imageIndex={0}
          visible={visible}
          onRequestClose={() => setVisible(false)}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.name}> {product.product_title}</Text>
          <Text style={styles.price}>{product.product_price}</Text>
          <Text style={styles.rating}>
            Rating: {product.product_star_rating} ★
          </Text>
          <Text style={styles.stock}>{product.stock || 3} left in stock</Text>
        </View>
      </View>

      {/* <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 5,
          width: '100%',
          backgroundColor: 'black',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={toggleSheet}>
        <Fontisto name="arrow-up" size={20} color={'white'} />
        <Button title="Best seller Product" color={'black'} />
      </TouchableOpacity> */}

      {isSheetVisible && (
        <BottomSheetBestSeller
          snapPoints={['25%', '40%', '50%']}
          onChange={(index: any) => {}}
          data={data}
          children={undefined}
          title={'Best Seller Products'}
        />
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    margin: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    margin: 5,
    resizeMode: 'contain',
  },
  infoContainer: {
    padding: 15,
  },
  name: {
    fontSize: 15,
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
});
