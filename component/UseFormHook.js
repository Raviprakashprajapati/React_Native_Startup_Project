import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Button, TextInput} from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import {launchImageLibrary} from "react-native-image-picker";
import * as ImagePicker from 'react-native-image-picker';
import { Image } from 'react-native';

export default function UseFormHook() {

  const { control, handleSubmit, formState: {errors} } = useForm();
  const [fileInfo,setFileInfo] = useState(null);

  function onSubmit(data) {
    console.warn('Data ' + data.Name+ data.Review);
  }

 async function handleDocumentPicker(){
    try {
        const result = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
        })
        setFileInfo(result)
        console.warn(result)
        
    } catch (error) {
        if(DocumentPicker.isCancel(error)){
            console.warn("Cancel")
        }else{
            throw error;
        }
    }
 }




  return ( 
    <View style={styles.container}>
      <View
        style={{
          width: 250,
          padding: 20,
          backgroundColor: '#fff',
          borderRadius: 20,
        }}>
            <Image source={{uri:"https://static.vecteezy.com/system/resources/previews/011/056/921/non_2x/feedback-button-feedback-speech-bubble-colorful-web-banner-illustration-feedback-sign-icon-vector.jpg"}}
            style={{resizeMode:"cover",height:150,width:150,borderRadius:50,marginHorizontal:"auto"}} />
        

        <Controller
          control={control}
          rules={{
                 required: 'Name is required',
                  minLength:{
                    value:3,
                    message:"Name should be greater then 3 character"
                  }
                }}
          render={({field: {onChange, onBlue, value}}) => (
            <TextInput
              label="Name"
              value={value}
              onChangeText={onChange}
              onBlur={onBlue}
              style={{backgroundColor: '#fff', color: 'black'}}
              mode="outlined"
              textColor="black"
              underlineColor="black"
              outlineColor="black"
              activeOutlineColor="black"
              error={!!errors.Name}
            />
          )}
          name="Name"
          defaultValue={''}
        />
        {errors.Name && (
          <Text
            style={{
              fontSize: 12,
              color: 'red',
              marginVertical: 7,
              textAlign: 'center',
            }}>
            {errors.Name.message}
          </Text>
        )}

        <Controller
          control={control}
          rules={{
            required: 'Review is required',
            minLength:{
                value:5,
                message:"Review should be greater then 5 character"
            }
          }}
          render={({field: {onChange, onBlue, value}}) => (
            <TextInput
              label="Review"
              value={value}
              multiline={true}
              onChangeText={onChange}
              style={{
                backgroundColor: '#fff',
                color: 'black',
                minHeight: 100,
                textAlignVertical: 'top',
                marginTop: 15,
              }}
              mode="outlined"
              textColor="black"
              underlineColor="black"
              outlineColor="black"
              activeOutlineColor="black"
              numberOfLines={3}
              error={!!errors.Review}
            />
          )}
          name="Review"
          defaultValue={''}
        />
        {errors.Review && (
          <Text
            style={{
              fontSize: 12,
              color: 'red',
              marginVertical: 7,
              textAlign: 'center',
            }}>
            {errors.Review.message}
          </Text>
        )}

        <View>
            <Button mode='text' style={{marginTop:10}} onPress={handleDocumentPicker} >
                Select File
            </Button>
            {fileInfo && (
        <View >
          <Text >File Name: {fileInfo[0].name}</Text>
          <Text >File Size: {fileInfo[0].size} bytes</Text>
          <Text >Type: {fileInfo[0].type}</Text>
        </View>
      )}
        </View>

     


        <Button
          mode="outlined"
          style={{marginVertical: 10}}
          textColor="black"
          onPress={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
