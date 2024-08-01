import {
  View,
  Text,
  ImageBackground,
  Image,
  Touchable,
  Pressable,
  Alert,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';
import PopUpBar from './PopUpBar';

type ProfileProps = NativeStackScreenProps<RootStackPramList, 'Profile'>;

export default function Profile({navigation}: ProfileProps) {

  const [user, setUser] = useState({name: '', password: ''});
  const [editProfile, setEditProfile] = useState(false);

  const [visible, setVisible] = useState(false);
  const onTogglePopBar = () => {
    setVisible(!visible)
  }
  const onDismissPopBar = () => setVisible(false);

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
  }, [editProfile]);

  async function handleLogout() {
    try {
      await AsyncStorage.clear();
      navigation.reset({index: 0, routes: [{name: 'Login'}]});
    } catch (error) {
      console.warn('Error in removing ', error);
    }
  }

  async function handleEditSave(newName: string, newPassword: string) {
    try {
      await AsyncStorage.setItem(
        'user',
        JSON.stringify({name: newName, password: newPassword}),
      );
      onTogglePopBar()
      setEditProfile(!editProfile)
    } catch (error) {
      console.warn('Error while updating profile ', error);
    }
  }

  if (editProfile) {
    return (
      <EditProfile
        name={user.name}
        password={user.password}
        handleEditSave={handleEditSave}
      />
    );
  } else {
    return (
      <View style={styles.container}>

        <PopUpBar  visible={visible} onTogglePopBar={onTogglePopBar} onDismissPopBar={onDismissPopBar} />

        <View style={styles.header} >
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => setEditProfile(!editProfile)}>
            <Icon name="create-outline" size={20} color="#fff" />
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#cc1002'}]}
            onPress={handleLogout}>
            <Icon name="log-out-outline" size={20} color="#fff" />
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    );
  }
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
    shadowOffset: {width: 0, height: 2}, // for iOS
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



function EditProfile({name, password, handleEditSave}: any) {
  const [newName, setnewName] = useState(name);
  const [newPassword, setnewPassword] = useState(password);

  return (
    <View style={styless.container}>
     <View style={{padding:20,backgroundColor:"#fff"}} >
      <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold",color:"black",marginBottom:20}} >Edit Profile</Text>
     <Text style={styless.label}>Enter new Name</Text>
      <TextInput
        value={newName}
        onChangeText={text => setnewName(text)}
        style={styless.input}
        placeholder="Enter your new name"
      />
      <Text style={styless.label}>Enter new Password</Text>
      <TextInput
        value={newPassword}
        onChangeText={text => setnewPassword(text)}
        style={styless.input}
        placeholder="Enter your new password"
        secureTextEntry
      />
      <TouchableOpacity
        onPress={() => {
          if(newName.length>2 && newPassword.length>3){
            handleEditSave(newName, newPassword)
          }
        }}
        style={styless.saveButton}>
        <Icon name="save-outline" size={20} color="#fff" />
        <Text style={styless.saveButtonText}>Save</Text>
      </TouchableOpacity>
     </View>
    </View>
  );
}


const styless = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent:"center",
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  saveButtonText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#fff',
  },
});
