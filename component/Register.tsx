import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        console.log('Registering user:', name, email, password);
    };

  return (
    <View style={styles.cardContainer}>
    <Text style={styles.cardTitle}>Register</Text>

    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>Name</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
    </View>

    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>Email</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </View>

    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>Password</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
    </View>

    <Pressable onPress={handleRegister} style={styles.registerButton} >
        <Text>Register</Text>
    </Pressable>
  </View>
  )
}



const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: '#ffff',
      borderRadius: 10,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5, // Shadow for a subtle 3D effect
    },
    cardTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    inputContainer: {
      marginBottom: 10,
    },
    inputLabel: {
      fontSize: 16,
      marginBottom: 5,
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
    },
    registerButton: {
      backgroundColor: '#007bff',
      borderRadius: 5,
      padding: 10,
    },
  });