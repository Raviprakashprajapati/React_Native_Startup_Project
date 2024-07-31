import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Entypo from 'react-native-vector-icons/Entypo';

const productValidationSchema = Yup.object().shape({
  asin: Yup.string().trim().required('Product Id is required'),
  product_title: Yup.string().trim().required('Product Name is required'),
  product_price: Yup.string().trim().required('Product price is required'),
  product_star_rating: Yup.string()
    .trim()
    .required('Product star rating is required'),
  product_photo: Yup.string().trim().required('Product Photo is required'),
});

export default function CreateProduct() {
  const [isProductIdVisible, setIsProductIdVisible] = useState(false);

  return (
    <View>
      <Formik
        initialValues={{
          asin: '',
          product_title: '',
          product_price: '',
          product_star_rating: '',
          product_photo: '',
        }}
        validationSchema={productValidationSchema}
        onSubmit={(values, {resetForm}) => {
          console.warn(values);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={{marginTop: 24}}>
            <View style={styles.inputContainer}>
              <TextInput
                style={{width: 200, color: 'black'}}
                placeholder="Enter the product ID"
                value={values.asin}
                secureTextEntry={isProductIdVisible ? false : true}
                onChangeText={handleChange('asin')}
                onBlur={handleBlur('asin')}
              />
              {isProductIdVisible ? (
                <Entypo
                  name="eye"
                  size={20}
                  color={'black'}
                  onPress={() => setIsProductIdVisible(!isProductIdVisible)}
                />
              ) : (
                <Entypo
                  name="eye-with-line"
                  size={20}
                  color={'black'}
                  onPress={() => setIsProductIdVisible(!isProductIdVisible)}
                />
              )}
            </View>
            {touched.asin && errors.asin && (
              <Text style={styles.errorText}>{errors.asin}</Text>
            )}

            <View style={styles.inputContainer}>
              <TextInput
                style={{width: 200, color: 'black'}}
                placeholder="Enter the product name"
                value={values.product_title}
                onChangeText={handleChange('product_title')}
                onBlur={handleBlur('product_title')}
              />
            </View>
            {touched.product_title && errors.product_title && (
              <Text style={styles.errorText}>{errors.product_title}</Text>
            )}

            <View style={styles.inputContainer}>
              <TextInput
                style={{width: 200, color: 'black'}}
                placeholder="Enter the product price"
                value={values.product_price}
                onChangeText={handleChange('product_price')}
                onBlur={handleBlur('product_price')}
              />
            </View>
            {touched.product_price && errors.product_price && (
              <Text style={styles.errorText}>{errors.product_price}</Text>
            )}

            <View style={styles.inputContainer}>
              <TextInput
                style={{width: 200, color: 'black'}}
                placeholder="Enter the product rating"
                value={values.product_star_rating}
                onChangeText={handleChange('product_star_rating')}
                onBlur={handleBlur('product_star_rating')}
              />
            </View>
            {touched.product_star_rating && errors.product_star_rating && (
              <Text style={styles.errorText}>{errors.product_star_rating}</Text>
            )}

            <View style={styles.inputContainer}>
              <TextInput
                style={{width: 200, color: 'black'}}
                placeholder="Enter the product photo"
                value={values.product_photo}
                onChangeText={handleChange('product_photo')}
                onBlur={handleBlur('product_photo')}
              />
            </View>
            {touched.product_photo && errors.product_photo && (
              <Text style={styles.errorText}>{errors.product_photo}</Text>
            )}

            <Pressable style={{margin: 39}}>
              <Button
                title="Submit"
                color={'black'}
                onPress={() => handleSubmit()}
              />
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    marginHorizontal: 25,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 13,
  },
  errorText: {
    fontSize: 11,
    color: 'red',
    textAlign: 'center',
  },
});
