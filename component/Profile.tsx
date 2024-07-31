import {View, Text, ImageBackground, Image, Touchable, Pressable, Alert,StyleSheet, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Icon from 'react-native-vector-icons/Ionicons';

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
      navigation.reset({index:0,routes:[{name:'Login'}]})
    } catch (error) {
      console.warn('Error in removing ', error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="person-circle-outline" size={80} color="black" />
      </View>
      
      <View style={styles.infoContainer}>
      <View style={styles.infoRow}>
          <FontAwesome5 name="user" size={25} color="grey" />
          <Text style={styles.infoText}>Name : {user.name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="key-outline" size={25} color="grey" />
          <Text style={styles.infoText}>Password : {user.password}</Text>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => { /* Handle Edit Profile */ }}>
          <Icon name="create-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button,{backgroundColor:"#cc1002"}]} onPress={handleLogout}>
          <Icon name="log-out-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  userName: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  infoContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: 'black',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3, // for Android
    shadowColor: '#000', // for iOS
    shadowOffset: { width: 0, height: 2 }, // for iOS
    shadowOpacity: 0.2, // for iOS
    shadowRadius: 5, // for iOS
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    justifyContent: 'center',
  },
  buttonText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#fff',
  },
});