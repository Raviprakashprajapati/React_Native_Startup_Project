import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';

const {width} = Dimensions.get("window")

const data = [
    { key: '1', text: 'Slide 1', image: "https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" },
    { key: '2', text: 'Slide 2' , image: "https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"  },
    { key: '3', text: 'Slide 3', image: "https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"  },
  ];


export default function CarouselData() {
  return (
    <View style={styles.container} >

        <Carousel
            width={width}
            height={200}
            autoPlay={true}
            data={data}
            scrollAnimationDuration={2000}
            renderItem={({item})=>(
                <View style={styles.slide}>
                  <Image source={{uri:item.image}} style={styles.slideImage}  />
                {/* <Text style={styles.slideText}>{item.text}</Text> */}
              </View>
            )}
        />
      
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: 'black',
      // padding:10,
      
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#9DD6EB',
      borderRadius: 8,
      // padding:10,
      marginHorizontal:10,
    },
    slideText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
    },
    slideImage:{
      width:'100%',
      height:200,
      resizeMode:"contain",
      borderRadius:10,
      shadowColor:"yellow",
      elevation:10,
    }
    
  });