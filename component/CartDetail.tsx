import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackPramList } from '../App'
import { useSelector } from 'react-redux'


type CartProps = NativeStackScreenProps<RootStackPramList,"Carts">

export default function CartDetail() {

    const cartData = useSelector((state: any)=>state.reducer)


  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}} >
      <Text style={{backgroundColor:"black" ,color:"white",padding:10,margin:10}}>CartDetail</Text>

      <ScrollView>
      <View>
        {
            cartData.length>0 && cartData.map((i:any)=>(
                <View key={i.id} style={{width:200,backgroundColor:"#fff",padding:10,margin:10}}>
                     <Text>{i.name}</Text>
                </View>
            ))
        }
        
      </View>
      </ScrollView>
    </View>
  )
}