// CustomLoader.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CustomLoader = ({ type }) => {
  return (
    <SkeletonPlaceholder>
      {type === 'product' && (
        <View style={styles.productContainer}>
          <View style={styles.productImage} />
          <View style={styles.productDetails}>
            <View style={styles.productTitle} />
            <View style={styles.productDescription} />
          </View>
        </View>
      )}
      {type === 'list' && (
        <View style={styles.listContainer}>
          <View style={styles.listItem} />
          <View style={styles.listItem} />
          <View style={styles.listItem} />
        </View>
      )}
      {type === 'profile' && (
        <View style={styles.profileContainer}>
          <View style={styles.profileImage} />
          <View style={styles.profileName} />
          <View style={styles.profileDetails} />
        </View>
      )}
    </SkeletonPlaceholder>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  productDetails: {
    marginLeft: 16,
    flex: 1,
  },
  productTitle: {
    width: '80%',
    height: 20,
    borderRadius: 4,
  },
  productDescription: {
    width: '60%',
    height: 20,
    borderRadius: 4,
    marginTop: 8,
  },
  listContainer: {
    marginBottom: 16,
  },
  listItem: {
    height: 20,
    borderRadius: 4,
    marginVertical: 8,
    width: '100%',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  profileName: {
    width: '50%',
    height: 20,
    borderRadius: 4,
    marginBottom: 8,
  },
  profileDetails: {
    width: '70%',
    height: 20,
    borderRadius: 4,
  },
});

export default CustomLoader;
