import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'

export default function MultiStepForm() {


    const [step,setStep] = useState(1)

    const [formData,setFormData] = useState({
        personalDetails:{
            name:"",
            password:""
        },
        qualification:{
            degree:"",
            university:"",
        },
        additionalDetails:{
            hobbies:'',
            bio:'',
        }
    })

    const handleChange = (formName,fieldName,value) =>{
        setFormData((prev)=>({
            ...prev,
            [formName]:{
                ...prev[formName],
                [fieldName]:value,
                
            },
        }))
    }

    const nextStep = () => setStep(prev => prev+1);
    const prevStep = () => setStep(prev => prev-1 );

    const validateForm = (formName) => {
        const form = formData[formName];
        return Object.values(form).every(field=>field.trim()!=='')
    }

    function handleRegister(){
        console.warn(formData)
        Alert.alert(JSON.stringify(formData))
    }
    

  return (
    <View style={styles.container} >

        {
            step === 1 && <UserPersonalDetails 
                            data={formData.personalDetails}
                            handleChange={handleChange}
                            nextStep={nextStep}
                            isValid={validateForm('personalDetails')} />
        }

        {
            step === 2 && <UserQualification
                            data={formData.qualification}
                            handleChange={handleChange}
                            nextStep={nextStep}
                            prevStep={prevStep}
                            isValid={validateForm('qualification')} />
        }

        {
            step === 3 && <UserAdditionalDetails
                            data={formData.additionalDetails}
                            handleChange={handleChange}
                            prevStep={prevStep} 
                            isValid={validateForm("additionalDetails")}
                            handleRegister={handleRegister} />
        }
    </View>
  )
}



function UserPersonalDetails({data, handleChange, nextStep, isValid}){
    return (
    <View style={styles.form}>
      <Text style={styles.title}>Personal Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the name"
        value={data.name}
        onChangeText={(value) => handleChange('personalDetails', 'name', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter the password"
        value={data.password}
        onChangeText={(value) => handleChange('personalDetails', 'password', value)}
      />
      {
        isValid?null:<Text style={{textAlign:"center",marginTop:5,marginBottom:15}} >Fill all the required details to continue.</Text>
      }
      <Button title="Next" onPress={nextStep} color={"black"}  disabled={!isValid} />
      
    </View>
    )
}


const UserQualification = ({ data, handleChange, nextStep, prevStep, isValid }) => {
    return (
      <View style={styles.form}>
        <Text style={styles.title}>Qualification</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the degree"
          value={data.degree}
          onChangeText={(value) => handleChange('qualification', 'degree', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter the university"
          value={data.university}
          onChangeText={(value) => handleChange('qualification', 'university', value)}
        />
        {
        isValid?null:<Text style={{textAlign:"center",marginTop:5,marginBottom:15}} >Fill all the required details to continue.</Text>
      }
        <Button title="Next" onPress={nextStep} color={"black"}  disabled={!isValid}  />
        <View style={{marginTop:10}}>  
        <Button title="Back" onPress={prevStep} color={"black"} />
        </View>  
      
      </View>
    );
  };



const UserAdditionalDetails = ({ data, handleChange, prevStep, isValid , handleRegister}) => {
    return (
      <View style={styles.form}>
        <Text style={styles.title}>Additional Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the hobbies"
          value={data.hobbies}
          onChangeText={(value) => handleChange('additionalDetails', 'hobbies', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter the bio"
          value={data.bio}
          onChangeText={(value) => handleChange('additionalDetails', 'bio', value)}
        />

    {
        isValid?null:<Text style={{textAlign:"center",marginTop:5,marginBottom:15}} >Fill all the required details to register .</Text>
      }

        <Button title="Back" onPress={prevStep} color={"black"}  />
        <View style={{marginTop:10}}>  
        <Button title="Register"  color={"black"} disabled={!isValid} onPress={handleRegister}  />
        </View>
      </View>
    );
  };




const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
    form: {
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      marginBottom: 10,
      textAlign: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
    },
  });