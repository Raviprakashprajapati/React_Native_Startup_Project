import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './component/Home';
import Details from './component/Details';
import CartDetail from './component/CartDetail';
import Login from './component/Login'; 
import Profile from './component/Profile';
import MultiStepForm from './component/MultiStepForm';
import FlatlistProduct from './component/FlatlistProduct';
import Slider from './component/Slider';
import Review from './component/Review';
import DealProduct from './component/DealProduct';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import SearchBar from './component/SearchBar';
import 'react-native-gesture-handler';
import OfferCard from './component/OfferCard';
import CategoryProduct from './component/CategoryProduct';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Layout from './component/Layout';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from "react-native-vector-icons/AntDesign"
import UseFormHook from './component/UseFormHook';
import Detail from './component/Detail';
import Foundation from "react-native-vector-icons/Foundation";
import GroupProduct from './component/GroupProduct';
import CreateProduct from './component/CreateProduct';


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
  Offers: {product: any};
};

export type RootDrawerPramList = {
  HomeStack: undefined;
  Profile: undefined;
  Deals: undefined;
  Login: undefined;
  Signup: undefined;
  Category: undefined;
  Layout: undefined;
  Form: undefined;
  Detail: undefined;
  Brand: undefined;
  AddProduct:undefined;
};

const Stack = createNativeStackNavigator<RootStackPramList>();
const Drawer = createDrawerNavigator<RootDrawerPramList>();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={() => ({
          headerShown: false,
          headerBackButtonMenuEnabled: false,
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

      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="List" component={FlatlistProduct} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen
        name="Slider"
        component={Slider}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Deal"
        component={DealProduct}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Search"
        component={SearchBar}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Offers"
        component={OfferCard}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        screenOptions={({navigation}) => ({
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'black',
          },
          drawerLabelStyle: {
            fontSize: 17,
            fontWeight: 'bold',
            textAlign: 'left',
          },
          headerTitleStyle: {
            color: 'white',
          },
          drawerActiveTintColor: 'black',
          drawerInactiveTintColor: 'black',
          headerTintColor: 'white',
          headerRight: () => (
            <FontAwesome
              name="search"
              size={25}
              color={'white'}
              onPress={() => navigation.navigate('Search')}
              style={{marginRight: 10}}
            />
          ),
        })}>

        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            title: `${' '}Home`,
            drawerIcon: () => (
              <FontAwesome
                name="home"
                size={25}
                color={'black'}
                style={{marginLeft: 5}}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            title: `${'  '}Profile`,
            drawerIcon: () => (
              <FontAwesome
                name="user"
                size={25}
                color={'black'}
                style={{marginLeft: 5}}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Deals"
          component={DealProduct}
          options={{
            title: `Deals`,
            drawerIcon: () => (
              <FontAwesome6 name="shop" size={25} color={'black'} />
            ),
          }}
        />

        <Drawer.Screen
          name="Category"
          component={CategoryProduct}
          options={{
            title: `${' '}Category`,
            drawerIcon: () => (
              <MaterialIcons name="category" size={25} color={'black'} />
            ),
          }}
        />

        <Drawer.Screen
          name="Layout"
          component={Layout}
          options={{
            title: `${' '}Layout`,
            drawerIcon: () => (
              <Foundation name="layout" size={30} color={'black'} />
            ),
          }}
        />


       <Drawer.Screen
          name="Form"
          component={UseFormHook}
          options={{
            title: `${' '}Form`,
            drawerIcon: () => (
              <FontAwesome6 name="file-waveform" size={25} color={'black'} />
            ),
          }}
        />

       <Drawer.Screen
          name="Detail"
          component={Detail}
          options={{
            title: `${' '}Details`,
            drawerIcon: () => (
              <FontAwesome name="th-list" size={25} color={'black'} />
            ),
          }}
        />

       <Drawer.Screen
          name="Brand"
          component={GroupProduct}
          options={{
            title: `${' '}Brand`,
            drawerIcon: () => (
              <Entypo name="select-arrows" size={25} color={'black'} />
            ),
          }}
        />

        <Drawer.Screen
          name="AddProduct"
          component={CreateProduct}
          options={{
            title: `${' '}Add-Product`,
            drawerIcon: () => (
              <MaterialIcons name="library-add" size={25} color={'black'} />
            ),
          }}
        />

        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            title: 'df',
            drawerItemStyle:{height:0}
          }}
        />

        <Drawer.Screen
          name="Signup"
          component={MultiStepForm}
          options={{
            headerShown: false,
            title: '',
            drawerItemStyle:{height:0}

          }}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
