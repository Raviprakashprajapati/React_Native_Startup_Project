import {View, Text, ImageBackground, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"


type ProfileProps = NativeStackScreenProps<RootStackPramList, 'Profile'>;


export default function Profile({navigation}: ProfileProps) {
  const [user, setUser] = useState({name: '' , password: ''});

  async function getUserData() {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      } else {
        setUser({name: '', password: ''});
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  async function handleLogout() {
    try {
      await AsyncStorage.clear();
      navigation.navigate('Login');
    } catch (error) {
      console.warn('Error in removing ', error);
    }
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 20,
          shadowColor: 'black',
          elevation: 20,
        }}>
        <Text
          style={{
            backgroundColor: 'black',
            paddingHorizontal: 30,
            color: 'white',
            paddingVertical: 10,
            borderRadius: 20,
            textAlign: 'center',
            fontSize: 18,
            fontWeight:"bold",
          }}>
        <FontAwesome5 name='user-alt' size={20} />
          {"  "}
          Profile
        </Text>
        <View style={{backgroundColor: 'white', padding: 20}}>
          <Text style={{fontSize: 15, marginBottom: 10}}>
            Name : {user.name}
          </Text>
          <Text>Password : {user.password}</Text>
          <Text
            style={{
              backgroundColor: '#ad1a29',
              borderRadius: 20,
              padding: 7,
              textAlign: 'center',
              color: 'white',
              marginTop: 20,
            }}
            onPress={handleLogout}>
            Logout
          </Text>
        </View>
      </View>
    </View>
  );
}
