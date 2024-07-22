import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';

const {width} = Dimensions.get("window");
const data = [
    { title: 'Item 1', image: 'https://www.myg.in/images/thumbnails/624/460/detailed/51/S24ULTRAGREY1.JPEG' },
    { title: 'Item 2', image: 'https://www.myg.in/images/thumbnails/624/460/detailed/51/S24ULTRAGREY1.JPEG' },
    { title: 'Item 3', image: 'https://www.myg.in/images/thumbnails/624/460/detailed/51/S24ULTRAGREY1.JPEG' },
]

const renderItem = ({item})=> {
    <View>
        <Image source={{uri: item.image}}  />
    </View>
}

export default function Slider() {
  return (
    <View  >
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width*0.8}
        loop={true}
      />
    </View>
  )
}