import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { getSingleProductOffer } from '../apiCall/productApi';

export default function OfferCard({ route, navigation }:any) {
  const [offer, setOffer] = useState<any>(null);

  useEffect(() => {
    getSingleProductOffer()
      .then((value:any) => {
        setOffer(value);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  if (!offer) {
    return (
      <View style={styles.centered}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const product = offer?.data 

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.product_photo }} style={styles.image} />
      <Text style={[styles.title,{fontSize:16}]}>{product.product_title}</Text>
      <Text style={styles.price}>
        {product.product_price}{' '}
        {product.product_original_price && (
          <Text style={styles.originalPrice}>
            {product.product_original_price}
          </Text>
        )}
      </Text>
      <Text style={styles.rating}>
        ⭐ {product.product_star_rating} ({product.product_num_ratings} ratings)
      </Text>
      <Text style={styles.availability}>{product.product_availability}</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Product</Text>
        {product.about_product.map((feature:any, index:any) => (
          <Text key={index} style={styles.feature}>
            • {feature}
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Product Description</Text>
        <Text style={styles.description}>{product.product_description}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Offers</Text>
        <FlatList
  data={product.product_offers}
  keyExtractor={(item, index) => `${item.asin}-${index}`}
  renderItem={({ item }) => (
    <View style={styles.offerContainer}>
      <Text style={styles.offerPrice}>{item.product_price}</Text>
      <Text style={styles.offerCondition}>{item.product_condition}</Text>
      <Text style={styles.offerSeller}>Sold by: {item.seller}</Text>
      <Text style={styles.offerDelivery}>
        Delivery: {item.delivery_price} ({item.delivery_time})
      </Text>
      <TouchableOpacity
        onPress={() => Linking.openURL(item.seller_link)}
        style={styles.sellerLinkButton}
      >
        <Text style={styles.sellerLinkText}>Visit Seller Page</Text>
      </TouchableOpacity>
    </View>
  )}
/>

      </View>
      <TouchableOpacity
        onPress={() => Linking.openURL(product.product_url)}
        style={styles.buyNowButton}
      >
        <Text style={styles.buyNowText}>Buy Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e60023',
    marginBottom: 8,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
    fontSize: 14,
  },
  rating: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  availability: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  feature: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
    textAlign:"justify",
},
description: {
      textAlign:"justify",
    fontSize: 14,
    color: '#555',
  },
  offerContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 2,
  },
  offerPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,
  },
  offerCondition: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  offerSeller: {
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  offerDelivery: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  sellerLinkButton: {
    backgroundColor: 'black',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  sellerLinkText: {
    color: '#fff',
    fontSize: 14,
  },
  buyNowButton: {
    backgroundColor: 'black',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    marginBottom:40
  },
  buyNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
