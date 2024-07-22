import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

type SearchProps = NativeStackScreenProps<RootStackPramList, 'Search'>;

const Product = [
    {
      "asin": "B0CMTW9MVK",
      "product_title": "Redmi 13C (Stardust Black, 6GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera",
      "product_price": "₹8,498",
      "product_original_price": "₹13,999",
      "currency": "INR",
      "product_star_rating": "4.1",
      "product_num_ratings": 5554,
      "product_url": "https://www.amazon.in/dp/B0CMTW9MVK",
      "product_photo": "https://m.media-amazon.com/images/I/71d1ytcCntL._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹8,498",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "5K+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "has_variations": true
    },
    {
      "asin": "B0CQG4RX37",
      "product_title": "POCO C65 (Pastel Blue 4GB RAM 128GB Storage)",
      "product_price": "₹6,799",
      "product_original_price": "₹10,999",
      "currency": "INR",
      "product_star_rating": "4",
      "product_num_ratings": 1003,
      "product_url": "https://www.amazon.in/dp/B0CQG4RX37",
      "product_photo": "https://m.media-amazon.com/images/I/51Zjp5fq1EL._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹6,799",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "5K+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "has_variations": true
    },
    {
      "asin": "B0CMTZNPXR",
      "product_title": "Redmi 13C (Starshine Green, 4GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera",
      "product_price": "₹7,698",
      "product_original_price": "₹11,999",
      "currency": "INR",
      "product_star_rating": "4.1",
      "product_num_ratings": 5554,
      "product_url": "https://www.amazon.in/dp/B0CMTZNPXR",
      "product_photo": "https://m.media-amazon.com/images/I/71hj88T5aBL._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹7,698",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "5K+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "has_variations": true
    },
    {
      "asin": "B0CQM6GXZB",
      "product_title": "POCO C65 (Pastel Blue 6GB RAM 128GB Storage)",
      "product_price": "₹7,499",
      "product_original_price": "₹11,999",
      "currency": "INR",
      "product_star_rating": "4",
      "product_num_ratings": 1003,
      "product_url": "https://www.amazon.in/dp/B0CQM6GXZB",
      "product_photo": "https://m.media-amazon.com/images/I/51Zjp5fq1EL._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹7,499",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "5K+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "coupon_text": "Save ₹200 with coupon",
      "has_variations": true
    },
    {
      "asin": "B0D54F4B44",
      "product_title": "realme NARZO N63 (Twilight Purple,4GB RAM+128GB Storage) 45W Fast Charge | 5000mAh Durable Battery | 7.74mm Ultra Slim | 50MP AI Camera | AI Boost",
      "product_price": "₹8,998",
      "product_original_price": "₹10,999",
      "currency": "INR",
      "product_star_rating": "4",
      "product_num_ratings": 80,
      "product_url": "https://www.amazon.in/dp/B0D54F4B44",
      "product_photo": "https://m.media-amazon.com/images/I/71ej8uLNzCL._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹8,998",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "2K+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "coupon_text": "Save ₹1,000 with coupon",
      "has_variations": true
    },
    {
      "asin": "B0CQ7RQ5RK",
      "product_title": "TECNO POP 8 (Gravity Black, 4GB+64GB)| 90Hz Punch Hole Display with Dynamic Port &amp; Dual Speakers with DTS| 5000mAh Battery |10W Type-C| Side Fingerprint Sensor| Octa-Core Processor",
      "product_price": "₹6,699",
      "product_original_price": "₹7,799",
      "currency": "INR",
      "product_star_rating": "4.1",
      "product_num_ratings": 1777,
      "product_url": "https://www.amazon.in/dp/B0CQ7RQ5RK",
      "product_photo": "https://m.media-amazon.com/images/I/61wbxpNaD1L._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹6,699",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "M.R.P: ",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "has_variations": true
    },
    {
      "asin": "B0CMTX362W",
      "product_title": "Redmi 13C (Starfrost White, 6GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera",
      "product_price": "₹8,498",
      "product_original_price": "₹13,999",
      "currency": "INR",
      "product_star_rating": "4.1",
      "product_num_ratings": 5554,
      "product_url": "https://www.amazon.in/dp/B0CMTX362W",
      "product_photo": "https://m.media-amazon.com/images/I/71scmEdSC2L._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹8,498",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "2K+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "has_variations": true
    },
    {
      "asin": "B0CMTY5P4V",
      "product_title": "Redmi 13C (Starfrost White, 4GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera",
      "product_price": "₹7,698",
      "product_original_price": "₹11,999",
      "currency": "INR",
      "product_star_rating": "4.1",
      "product_num_ratings": 5554,
      "product_url": "https://www.amazon.in/dp/B0CMTY5P4V",
      "product_photo": "https://m.media-amazon.com/images/I/71scmEdSC2L._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹7,698",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "5K+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "has_variations": true
    },
    {
      "asin": "B0D54GQVRN",
      "product_title": "realme NARZO N63 (Leather Blue, 4GB RAM+128GB Storage) 45W Fast Charge | 5000mAh Durable Battery | 7.74mm Ultra Slim | 50MP AI Camera | AI Boost",
      "product_price": "₹8,998",
      "product_original_price": "₹10,999",
      "currency": "INR",
      "product_star_rating": "4",
      "product_num_ratings": 80,
      "product_url": "https://www.amazon.in/dp/B0D54GQVRN",
      "product_photo": "https://m.media-amazon.com/images/I/81JjTw28j8L._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹8,998",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "4K+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "coupon_text": "Save ₹1,000 with coupon",
      "has_variations": true
    },
    {
      "asin": "B0CQG9N4Z3",
      "product_title": "POCO C65 (Matte Black 4GB RAM 128GB Storage)",
      "product_price": "₹6,799",
      "product_original_price": "₹10,999",
      "currency": "INR",
      "product_star_rating": "4",
      "product_num_ratings": 1003,
      "product_url": "https://www.amazon.in/dp/B0CQG9N4Z3",
      "product_photo": "https://m.media-amazon.com/images/I/51PQfSwIqyL._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹6,799",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "5K+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "has_variations": true
    },
    {
      "asin": "B0D78WCNZZ",
      "product_title": "Redmi 13 5G, Hawaiian Blue, 6GB+128GB | India Debut SD 4 Gen 2 AE | 108MP Pro Grade Camera | 6.79in Largest Display in Segment",
      "product_price": "₹13,998",
      "product_original_price": "₹17,999",
      "currency": "INR",
      "product_star_rating": null,
      "product_num_ratings": 0,
      "product_url": "https://www.amazon.in/dp/B0D78WCNZZ",
      "product_photo": "https://m.media-amazon.com/images/I/81weRj535kL._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹13,998",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "5K+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "coupon_text": "Save ₹1,000 with coupon",
      "has_variations": true
    },
    {
      "asin": "B0CQVP5ZZF",
      "product_title": "POCO M6 5G (Orion Blue, 8GB RAM, 256GB Storage)",
      "product_price": "₹10,999",
      "product_original_price": "₹13,499",
      "currency": "INR",
      "product_star_rating": "3.9",
      "product_num_ratings": 726,
      "product_url": "https://www.amazon.in/dp/B0CQVP5ZZF",
      "product_photo": "https://m.media-amazon.com/images/I/71jkM1zB22L._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹10,999",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "2K+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "has_variations": true
    },
    {
      "asin": "B0D78WKY12",
      "product_title": "Redmi 13 5g Black Diamond 6GB 128GB",
      "product_price": "₹13,998",
      "product_original_price": "₹17,999",
      "currency": "INR",
      "product_star_rating": null,
      "product_num_ratings": 0,
      "product_url": "https://www.amazon.in/dp/B0D78WKY12",
      "product_photo": "https://m.media-amazon.com/images/I/81ndCd07RuL._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹13,998",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "5K+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "coupon_text": "Save ₹1,000 with coupon",
      "has_variations": true
    },
    {
      "asin": "B0CY228896",
      "product_title": "POCO C65 (Pastel Green 6GB RAM 128GB Storage)",
      "product_price": "₹7,499",
      "product_original_price": "₹11,999",
      "currency": "INR",
      "product_star_rating": "4",
      "product_num_ratings": 1003,
      "product_url": "https://www.amazon.in/dp/B0CY228896",
      "product_photo": "https://m.media-amazon.com/images/I/51NkHXXapeL._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 2,
      "product_minimum_offer_price": "₹7,490",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "1K+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "coupon_text": "Save ₹200 with coupon",
      "has_variations": true
    },
    {
      "asin": "B0CY299SKS",
      "product_title": "POCO C65 (Pastel Green 4GB RAM 128GB Storage)",
      "product_price": "₹6,799",
      "product_original_price": "₹10,999",
      "currency": "INR",
      "product_star_rating": "4",
      "product_num_ratings": 1003,
      "product_url": "https://www.amazon.in/dp/B0CY299SKS",
      "product_photo": "https://m.media-amazon.com/images/I/51NkHXXapeL._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹6,799",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "2K+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "has_variations": true
    },
    {
      "asin": "B0CQVRKCSY",
      "product_title": "POCO M6 5G (Orion Blue, 6GB RAM, 128GB Storage)",
      "product_price": "₹9,999",
      "product_original_price": "₹13,999",
      "currency": "INR",
      "product_star_rating": "3.9",
      "product_num_ratings": 726,
      "product_url": "https://www.amazon.in/dp/B0CQVRKCSY",
      "product_photo": "https://m.media-amazon.com/images/I/71GKbs-kJ1L._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹9,999",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "4K+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "has_variations": true
    },
    {
      "asin": "B0CNX6WVG5",
      "product_title": "Redmi 13C 5G (Startrail Green, 4GB RAM, 128GB Storage) | MediaTek Dimensity 6100+ 5G | 90Hz Display",
      "product_price": "₹10,499",
      "product_original_price": "₹13,999",
      "currency": "INR",
      "product_star_rating": "4",
      "product_num_ratings": 1382,
      "product_url": "https://www.amazon.in/dp/B0CNX6WVG5",
      "product_photo": "https://m.media-amazon.com/images/I/81KFSdWCCEL._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹10,499",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "5K+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "coupon_text": "Save ₹1,000 with coupon",
      "has_variations": true
    },
    {
      "asin": "B0CX74JKLL",
      "product_title": "Nothing Phone (2a) 5G (Black, 8GB RAM, 256GB Storage)",
      "product_price": "₹25,475",
      "product_original_price": "₹27,999",
      "currency": "INR",
      "product_star_rating": "4",
      "product_num_ratings": 63,
      "product_url": "https://www.amazon.in/dp/B0CX74JKLL",
      "product_photo": "https://m.media-amazon.com/images/I/4172-I2V+AL._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 10,
      "product_minimum_offer_price": "₹25,469",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "500+ bought in past month",
      "delivery": "FREE delivery Sat, 27 Jul Or fastest delivery Tomorrow, 20 Jul",
      "has_variations": false
    },
    {
      "asin": "B0D3GYZ82S",
      "product_title": "realme NARZO N65 5G (Amber Gold 6GB RAM, 128GB Storage) India&#x27;s 1st D6300 5G Chipset | Ultra Slim Design | 120Hz Eye Comfort Display | 50MP AI Camera| Charger in The box",
      "product_price": "₹12,498",
      "product_original_price": "₹14,999",
      "currency": "INR",
      "product_star_rating": "4.1",
      "product_num_ratings": 236,
      "product_url": "https://www.amazon.in/dp/B0D3GYZ82S",
      "product_photo": "https://m.media-amazon.com/images/I/71ocQY+G2XL._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹12,498",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "5K+ bought in past month",
      "delivery": "FREE delivery Mon, 22 Jul Or fastest delivery Tomorrow, 20 Jul",
      "coupon_text": "Save ₹1,500 with coupon",
      "has_variations": true
    },
    {
      "asin": "B0D3WVGD5H",
      "product_title": "realme NARZO 70x 5G (Forest Green, 8GB RAM,128GB Storage) | 120Hz Ultra Smooth Display | Dimensity 6100+ 6nm 5G | 50MP AI Camera | 45W Charger in The Box",
      "product_price": "₹14,998",
      "product_original_price": "₹18,999",
      "currency": "INR",
      "product_star_rating": "4",
      "product_num_ratings": 712,
      "product_url": "https://www.amazon.in/dp/B0D3WVGD5H",
      "product_photo": "https://m.media-amazon.com/images/I/71h8NUTmBOL._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹14,998",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "4K+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "coupon_text": "Save ₹1,500 with coupon",
      "has_variations": true
    },
    {
      "asin": "B0CV3DZ1HM",
      "product_title": "Redmi A3 (Midnight Black, 3GB RAM, 64GB Storage) | Premium Halo Design | 90Hz Display | Powerful 4G G36 Processor",
      "product_price": "₹6,999",
      "product_original_price": "₹9,999",
      "currency": "INR",
      "product_star_rating": "3.6",
      "product_num_ratings": 297,
      "product_url": "https://www.amazon.in/dp/B0CV3DZ1HM",
      "product_photo": "https://m.media-amazon.com/images/I/71dkUkkFDeL._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹6,999",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "500+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "has_variations": true
    },
    {
      "asin": "B0CVL9MSCK",
      "product_title": "Nokia G42 5G Powered by Snapdragon® 480 Plus 5G | 50MP Triple Rear AI Camera | 6GB RAM (4GB RAM + 2GB Virtual RAM) | 128GB Storage | 3-day Battery Life | 2 Years of Android Upgrades | SO Grey",
      "product_price": "₹9,499",
      "product_original_price": "₹12,999",
      "currency": "INR",
      "product_star_rating": "3.9",
      "product_num_ratings": 4319,
      "product_url": "https://www.amazon.in/dp/B0CVL9MSCK",
      "product_photo": "https://m.media-amazon.com/images/I/71oIjjNm+nL._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹9,499",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "500+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "has_variations": true
    },
    {
      "asin": "B0D5YCYS1G",
      "product_title": "OnePlus Nord CE4 Lite 5G (Super Silver, 8GB RAM, 128GB Storage)",
      "product_price": "₹19,999",
      "product_original_price": "₹20,999",
      "currency": "INR",
      "product_star_rating": "4.2",
      "product_num_ratings": 125,
      "product_url": "https://www.amazon.in/dp/B0D5YCYS1G",
      "product_photo": "https://m.media-amazon.com/images/I/61Io5-ojWUL._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹19,999",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "5K+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "has_variations": false
    },
    {
      "asin": "B0CDRVG19T",
      "product_title": "POCO M6 Pro 5G (128 GB) (6 GB RAM) (Power Black)",
      "product_price": "₹9,998",
      "product_original_price": "₹16,999",
      "currency": "INR",
      "product_star_rating": "3.8",
      "product_num_ratings": 3254,
      "product_url": "https://www.amazon.in/dp/B0CDRVG19T",
      "product_photo": "https://m.media-amazon.com/images/I/51dGqSFNrDL._AC_UY654_FMwebp_QL65_.jpg",
      "product_num_offers": 1,
      "product_minimum_offer_price": "₹9,998",
      "is_best_seller": false,
      "is_amazon_choice": false,
      "is_prime": true,
      "climate_pledge_friendly": false,
      "sales_volume": "5K+ bought in past month",
      "delivery": "FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul",
      "has_variations": true
    }
]
  


export default function SearchBar({navigation, route}: SearchProps) {
  const [searchText, setSearchText] = useState('');
  const searchRef = useRef<TextInput | null>(null);
  

  useEffect(()=>{
        if(searchRef.current){
            searchRef.current.focus()
        }
  },[])

  const handleClearText = () => {
    setSearchText('');
  };

  return (
    <View style={styles.container}>


      <View style={styles.searchContainer}>

        <TouchableOpacity onPress={()=>navigation.navigate("Home")} >
          <AntDesign name="arrowleft" size={20} color="#999" />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Enter the product name"
          value={searchText}
          ref={searchRef}
          onChangeText={setSearchText}
        />
        {searchText !== '' && 
        (
          <TouchableOpacity
            onPress={handleClearText}
            style={styles.iconContainer}>
            <Fontisto name="close" size={20} color="#999" />
          </TouchableOpacity>
        )}
      </View>

      {
        searchText==="" && 
            <Text style={{height:"100%",textAlignVertical:"center",textAlign:"center",fontSize:20,
                
            }} >no such Product found...</Text>
      }

        {
            searchText.length>0 &&
             <ScrollView style={{marginBottom:50}} >
            {
                Product
                .filter((i)=>(
                    searchText===""?null:
                    i.product_title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) 
                ))
                .map((i,index)=>(
                    <TouchableOpacity style={{backgroundColor:"white",padding:20,margin:8,borderRadius:20,display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",gap:10}} key={index}  >
                    <Image source={{uri:i.product_photo}} style={{height:60,width:60,resizeMode:"contain"}} />
                    <Text style={{fontSize:13,width:'70%'}} >{i.product_title.substring(0,50)}...</Text>
                </TouchableOpacity>
                )) 
            }
            </ScrollView>
            
        }

       

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 1,
    shadowColor: 'black',
    elevation: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 5,
  },
  iconContainer: {
    marginLeft: 10,
  },
});