import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';
import {useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';

type CartProps = NativeStackScreenProps<RootStackPramList, 'Carts'>;

export default function CartDetail() {
  const cartData = useSelector((state: any) => state.reducer);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: 10,
          margin: 10,
          textAlignVertical: 'center',
        }}>
        <Feather name="shopping-cart" size={20} /> {'  '}
        CartDetail
      </Text>

      <ScrollView>
        <View>
          {cartData.length > 0 &&
            cartData.map((i: any) => (
              <View
                key={i.id}
                style={{
                  width: 300,
                  backgroundColor: '#fff',
                  paddingHorizontal: 30,
                  overflow:'visible',
                  margin: 10,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  paddingVertical: 14,
                }}>
                <Image
                  source={{uri: i?.product_photo}}
                  style={{resizeMode: 'contain', height: 50, width: 50}}
                />
                <Text style={{fontSize: 13,textAlign:"justify"}}>{i?.product_title.substring(0,80)}..</Text>
              </View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
