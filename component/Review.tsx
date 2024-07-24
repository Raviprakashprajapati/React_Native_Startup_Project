import {View, Text, ScrollView, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';
import {getProductReviewApi} from '../apiCall/productApi';
import useReadMore from '../utils/useReadMore';
import {Rating,AirbnbRating} from "react-native-ratings"
import SwipeRating from 'react-native-ratings/dist/SwipeRating';

type ReviewProps = NativeStackScreenProps<RootStackPramList, 'Review'>;

interface ReviewData {
  review_id: string;
  review_title: string;
  review_comment: string;
  review_star_rating: string;
  review_link: string;
  review_author: string;
  review_author_avatar: string;
  review_images: string[]; // Assuming it's an array of image URLs
  review_video: string | null; // Assuming it can be a URL or null
  review_date: string;
  is_verified_purchase: boolean;
  helpful_vote_statement: string;
  reviewed_product_asin: string;
}

interface ReviewDesignProps {
  data: any;
}

export default function Review({route}: ReviewProps) {
  const [review, setReview] = useState([]);

  useEffect(() => {
    getProductReviewApi(route.params.id)
      .then((value: any) => {
        setReview(value);
      })
      .catch(err => {
        console.warn(err);
      });
  }, []);

  return (
    <View>
      <Text
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: 10,
          margin: 20,
          textAlign: 'center',
        }}>
        Review
      </Text>

      {review.length > 0 && (
        <FlatList
          data={review}
          keyExtractor={(i: any) => i.review_id}
          renderItem={({item}) => <ReviewDesign data={item} />}
        />
      )}
    </View>
  );
}

const ReviewDesign = ({data}: ReviewDesignProps) => {
  const {isExpanded, setIsExpanded, toggleExpanded} = useReadMore();

  return (
    <View style={{backgroundColor: '#fff', padding: 10, margin: 20}}>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",gap:5}} >
        <Image
          source={{uri: data.review_author_avatar}}
          style={{height: 30, width: 30, resizeMode: 'contain'}}
        />
        <View>
          <Text style={{color:"black"}} >{data.review_author}</Text>
          <Text style={{fontSize:12,color:"black"}} >{data.review_date}</Text>
        </View>
      </View>

        <View style={{marginTop:5}} >
        <Rating
            type='star'
            ratingCount={5}
            imageSize={15}
            startingValue={data.review_star_rating}
            fractions={1} 
            readonly 
            />
        </View>


      <View>
        {data.review_comment.length < 250 ? (
          <Text style={{padding:10,textAlign:"justify",fontSize:12,}} >{data.review_comment}</Text>
        ) : (
          <>
            {isExpanded ? (
              <Text style={{padding:10,textAlign:"justify",fontSize:12,}} >
                {data.review_comment}{' '}
                <Text onPress={toggleExpanded} style={{color:"blue"}} >Read Less...</Text>{' '}
              </Text>
            ) : (
              <Text style={{padding:10,textAlign:"justify",fontSize:12,}}>
                {' '}
                {data.review_comment.substring(
                  0,
                  data.review_comment.length / 2,
                )}{' '}
                <Text onPress={toggleExpanded} style={{color:"blue"}} >Read More...</Text>{' '}
              </Text>
            )}
          </>
        )}
      </View>
    </View>
  );
};
