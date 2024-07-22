import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './component/Home';
import Details from './component/Details';
import CartDetail from './component/CartDetail';
import Login from './component/Login';
import Profile from './component/Profile';
import Register from './component/Register';
import MultiStepForm from './component/MultiStepForm';
import FlatlistProduct from './component/FlatlistProduct';
import Slider from './component/Slider';
import Review from './component/Review';
import DealProduct from './component/DealProduct';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchBar from './component/SearchBar';

export type RootStackPramList = {
  Home: undefined;
  Details: {product: any};
  Carts: undefined;
  Login: undefined;
  Profile: undefined;
  Register: undefined;
  List: undefined;
  Slider: undefined;
  Review: {id: string};
  Deal: undefined;
  Search: undefined;
};

const Stack = createNativeStackNavigator<RootStackPramList>();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation})=>({
            title: 'Trending Product',
            headerBackButtonMenuEnabled: false,
            headerRight: ()=>(
              <FontAwesome name='search' size={25} color={"black"} 
              onPress={()=>navigation.navigate("Search")}   />
            )
          })}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Product Details'}}
        />
        <Stack.Screen
          name="Carts"
          component={CartDetail}
          options={{title: 'Cart Details'}}
        />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}  />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Register" component={MultiStepForm} />

        <Stack.Screen name="List" component={FlatlistProduct} />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="Slider" component={Slider} options={{headerShown:false}} />
        <Stack.Screen name="Deal" component={DealProduct} options={{headerShown:true}} />
        <Stack.Screen name="Search" component={SearchBar} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
