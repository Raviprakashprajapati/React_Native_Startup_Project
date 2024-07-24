import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React, { useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';



GoogleSignin.configure({
  webClientId:
    '490453614530-fam6iejorfhv8gmdvkr5rsia6nmjjq88.apps.googleusercontent.com',
  androidClientId:
    '490453614530-ckedkcf2h600bbg03gv2fu560s3v7alj.apps.googleusercontent.com',
  iosClientId:
    '490453614530-8prcgkco9n6q6omcdo2t57tgpgg4pv0d.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
});

const GoogleLogin = async () => {
  await GoogleSignin.hasPlayServices();
  const userInfo = await GoogleSignin.signIn();
  return userInfo;
};

const loginSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name should be greater than 3 character')
    .trim()
    .required('Name is required'),
  password: Yup.string()
    .trim()
    .min(4, 'Password must be at least 4 character')
    .max(10, 'Password must be not more than 10 Character')
    .required('Password is required'),
});

export default function Login({navigation}) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const response = await GoogleLogin();
      const {idToken, user} = response;
      // console.warn(user);
      setUser(user);
      // if (idToken) {
      // 	const resp = await authAPI.validateToken({
      // 		token: idToken,
      // 		email: user.email,
      // 	});
      // 	await handlePostLoginData(resp.data);
      // }
    } catch (apiError) {
      setError(
        apiError?.response?.data?.error?.message || 'Something went wrong',
      );
    } finally {
      setLoading(false);
    }
  };

  async function handleGoogleLogout() {
    try {
      await GoogleSignin.signOut();
      // console.warn('Logout');
      setUser(null);
    } catch (error) {
      console.log('Google Sign-Out Error: ', error);
      setUser(null);
    }
  }

  const saveData = async values => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(values));
      navigation.navigate('HomeStack');
    } catch (error) {
      console.warn('Error saving data:', error);
    }
  };


  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Formik
        initialValues={{name: '', password: ''}}
        validationSchema={loginSchema}
        onSubmit={(values, {resetForm}) => {
          saveData(values);
          resetForm();
        }}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <View style={styles.container}>
            <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
              Login
            </Text>
            <TextInput
              placeholder="Enter your name"
              style={styles.input}
              value={values.name}
              onChangeText={handleChange('name')}
            />
            {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}

            <TextInput
              placeholder="Enter your password"
              style={styles.input}
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <Pressable onPress={() => handleSubmit()}>
              <Text style={styles.button}>Submit</Text>
            </Pressable>

            {/*google login  */}
            <View>
              {!user ? (
                <Pressable
                  onPress={handleGoogleLogin}
                  style={styles.googleButton}>
                  <Text style={styles.googleButtonText}>
                    Sign in with Google
                  </Text>
                </Pressable>
              ) : null}
              {user && (
                <View style={styles.userInfo}>
                  <Image style={styles.userImage} source={{uri: user?.photo}} />
                  <Text style={styles.userName}>{user?.name}</Text>
                  <Text
                    onPress={handleGoogleLogout}
                    style={{
                      backgroundColor: '#b50909',
                      color: 'white',
                      padding: 6,
                    }}>
                    Logout
                  </Text>
                </View>
              )}
            </View>

            <Text
              style={styles.registerButton}
              onPress={() => navigation.navigate('Signup')}>
              Register yourself...
            </Text>
          </View>
        )}
      </Formik>

   

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#585a5c',
    padding: 30,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    elevation: 100,
  },
  input: {
    color: 'black',
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 8,
    margin: 10,
    borderRadius: 30,
  },
  errorText: {
    color: '#d1cbcb',
    textAlign: 'center',
    fontSize: 13,
    margin: 3,
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: 30,
    textAlign: 'center',
    paddingVertical: 8,
    borderRadius: 30,
    marginTop: 10,
    fontSize: 17,
  },
  registerButton: {
    color: '#15aae6',
    textAlign: 'right',
    marginTop: 15,
  },

  googleButton: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4285F4',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    elevation: 2, // Add some shadow/elevation for Android
    shadowColor: '#000', // Shadow properties for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: 30,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userInfo: {
    alignItems: 'center',
    marginTop: 20,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    color: '#333',
  },
});
