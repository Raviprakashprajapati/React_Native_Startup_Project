import axios from 'axios';

const product = [
  {
    asin: 'B0CMTW9MVK',
    product_title:
      'Redmi 13C (Stardust Black, 6GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera',
    product_price: '₹8,498',
    product_original_price: '₹13,999',
    currency: 'INR',
    product_star_rating: '4.1',
    product_num_ratings: 5554,
    product_url: 'https://www.amazon.in/dp/B0CMTW9MVK',
    product_photo:
      'https://m.media-amazon.com/images/I/71d1ytcCntL._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹8,498',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '5K+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    has_variations: true,
  },
  {
    asin: 'B0CQG4RX37',
    product_title: 'POCO C65 (Pastel Blue 4GB RAM 128GB Storage)',
    product_price: '₹6,799',
    product_original_price: '₹10,999',
    currency: 'INR',
    product_star_rating: '4',
    product_num_ratings: 1003,
    product_url: 'https://www.amazon.in/dp/B0CQG4RX37',
    product_photo:
      'https://m.media-amazon.com/images/I/51Zjp5fq1EL._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹6,799',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '5K+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    has_variations: true,
  },
  {
    asin: 'B0CMTZNPXR',
    product_title:
      'Redmi 13C (Starshine Green, 4GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera',
    product_price: '₹7,698',
    product_original_price: '₹11,999',
    currency: 'INR',
    product_star_rating: '4.1',
    product_num_ratings: 5554,
    product_url: 'https://www.amazon.in/dp/B0CMTZNPXR',
    product_photo:
      'https://m.media-amazon.com/images/I/71hj88T5aBL._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹7,698',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '5K+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    has_variations: true,
  },
  {
    asin: 'B0CQM6GXZB',
    product_title: 'POCO C65 (Pastel Blue 6GB RAM 128GB Storage)',
    product_price: '₹7,499',
    product_original_price: '₹11,999',
    currency: 'INR',
    product_star_rating: '4',
    product_num_ratings: 1003,
    product_url: 'https://www.amazon.in/dp/B0CQM6GXZB',
    product_photo:
      'https://m.media-amazon.com/images/I/51Zjp5fq1EL._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹7,499',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '5K+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    coupon_text: 'Save ₹200 with coupon',
    has_variations: true,
  },
  {
    asin: 'B0D54F4B44',
    product_title:
      'realme NARZO N63 (Twilight Purple,4GB RAM+128GB Storage) 45W Fast Charge | 5000mAh Durable Battery | 7.74mm Ultra Slim | 50MP AI Camera | AI Boost',
    product_price: '₹8,998',
    product_original_price: '₹10,999',
    currency: 'INR',
    product_star_rating: '4',
    product_num_ratings: 80,
    product_url: 'https://www.amazon.in/dp/B0D54F4B44',
    product_photo:
      'https://m.media-amazon.com/images/I/71ej8uLNzCL._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹8,998',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '2K+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    coupon_text: 'Save ₹1,000 with coupon',
    has_variations: true,
  },
  {
    asin: 'B0CQ7RQ5RK',
    product_title:
      'TECNO POP 8 (Gravity Black, 4GB+64GB)| 90Hz Punch Hole Display with Dynamic Port &amp; Dual Speakers with DTS| 5000mAh Battery |10W Type-C| Side Fingerprint Sensor| Octa-Core Processor',
    product_price: '₹6,699',
    product_original_price: '₹7,799',
    currency: 'INR',
    product_star_rating: '4.1',
    product_num_ratings: 1777,
    product_url: 'https://www.amazon.in/dp/B0CQ7RQ5RK',
    product_photo:
      'https://m.media-amazon.com/images/I/61wbxpNaD1L._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹6,699',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: 'M.R.P: ',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    has_variations: true,
  },
  {
    asin: 'B0CMTX362W',
    product_title:
      'Redmi 13C (Starfrost White, 6GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera',
    product_price: '₹8,498',
    product_original_price: '₹13,999',
    currency: 'INR',
    product_star_rating: '4.1',
    product_num_ratings: 5554,
    product_url: 'https://www.amazon.in/dp/B0CMTX362W',
    product_photo:
      'https://m.media-amazon.com/images/I/71scmEdSC2L._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹8,498',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '2K+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    has_variations: true,
  },
  {
    asin: 'B0CMTY5P4V',
    product_title:
      'Redmi 13C (Starfrost White, 4GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera',
    product_price: '₹7,698',
    product_original_price: '₹11,999',
    currency: 'INR',
    product_star_rating: '4.1',
    product_num_ratings: 5554,
    product_url: 'https://www.amazon.in/dp/B0CMTY5P4V',
    product_photo:
      'https://m.media-amazon.com/images/I/71scmEdSC2L._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹7,698',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '5K+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    has_variations: true,
  },
  {
    asin: 'B0D54GQVRN',
    product_title:
      'realme NARZO N63 (Leather Blue, 4GB RAM+128GB Storage) 45W Fast Charge | 5000mAh Durable Battery | 7.74mm Ultra Slim | 50MP AI Camera | AI Boost',
    product_price: '₹8,998',
    product_original_price: '₹10,999',
    currency: 'INR',
    product_star_rating: '4',
    product_num_ratings: 80,
    product_url: 'https://www.amazon.in/dp/B0D54GQVRN',
    product_photo:
      'https://m.media-amazon.com/images/I/81JjTw28j8L._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹8,998',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '4K+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    coupon_text: 'Save ₹1,000 with coupon',
    has_variations: true,
  },
  {
    asin: 'B0CQG9N4Z3',
    product_title: 'POCO C65 (Matte Black 4GB RAM 128GB Storage)',
    product_price: '₹6,799',
    product_original_price: '₹10,999',
    currency: 'INR',
    product_star_rating: '4',
    product_num_ratings: 1003,
    product_url: 'https://www.amazon.in/dp/B0CQG9N4Z3',
    product_photo:
      'https://m.media-amazon.com/images/I/51PQfSwIqyL._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹6,799',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '5K+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    has_variations: true,
  },
  {
    asin: 'B0D78WCNZZ',
    product_title:
      'Redmi 13 5G, Hawaiian Blue, 6GB+128GB | India Debut SD 4 Gen 2 AE | 108MP Pro Grade Camera | 6.79in Largest Display in Segment',
    product_price: '₹13,998',
    product_original_price: '₹17,999',
    currency: 'INR',
    product_star_rating: null,
    product_num_ratings: 0,
    product_url: 'https://www.amazon.in/dp/B0D78WCNZZ',
    product_photo:
      'https://m.media-amazon.com/images/I/81weRj535kL._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹13,998',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '5K+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    coupon_text: 'Save ₹1,000 with coupon',
    has_variations: true,
  },
  {
    asin: 'B0CQVP5ZZF',
    product_title: 'POCO M6 5G (Orion Blue, 8GB RAM, 256GB Storage)',
    product_price: '₹10,999',
    product_original_price: '₹13,499',
    currency: 'INR',
    product_star_rating: '3.9',
    product_num_ratings: 726,
    product_url: 'https://www.amazon.in/dp/B0CQVP5ZZF',
    product_photo:
      'https://m.media-amazon.com/images/I/71jkM1zB22L._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹10,999',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '2K+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    has_variations: true,
  },
  {
    asin: 'B0D78WKY12',
    product_title: 'Redmi 13 5g Black Diamond 6GB 128GB',
    product_price: '₹13,998',
    product_original_price: '₹17,999',
    currency: 'INR',
    product_star_rating: null,
    product_num_ratings: 0,
    product_url: 'https://www.amazon.in/dp/B0D78WKY12',
    product_photo:
      'https://m.media-amazon.com/images/I/81ndCd07RuL._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹13,998',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '5K+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    coupon_text: 'Save ₹1,000 with coupon',
    has_variations: true,
  },
  {
    asin: 'B0CY228896',
    product_title: 'POCO C65 (Pastel Green 6GB RAM 128GB Storage)',
    product_price: '₹7,499',
    product_original_price: '₹11,999',
    currency: 'INR',
    product_star_rating: '4',
    product_num_ratings: 1003,
    product_url: 'https://www.amazon.in/dp/B0CY228896',
    product_photo:
      'https://m.media-amazon.com/images/I/51NkHXXapeL._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 2,
    product_minimum_offer_price: '₹7,490',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '1K+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    coupon_text: 'Save ₹200 with coupon',
    has_variations: true,
  },
  {
    asin: 'B0CY299SKS',
    product_title: 'POCO C65 (Pastel Green 4GB RAM 128GB Storage)',
    product_price: '₹6,799',
    product_original_price: '₹10,999',
    currency: 'INR',
    product_star_rating: '4',
    product_num_ratings: 1003,
    product_url: 'https://www.amazon.in/dp/B0CY299SKS',
    product_photo:
      'https://m.media-amazon.com/images/I/51NkHXXapeL._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹6,799',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '2K+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    has_variations: true,
  },
  {
    asin: 'B0CQVRKCSY',
    product_title: 'POCO M6 5G (Orion Blue, 6GB RAM, 128GB Storage)',
    product_price: '₹9,999',
    product_original_price: '₹13,999',
    currency: 'INR',
    product_star_rating: '3.9',
    product_num_ratings: 726,
    product_url: 'https://www.amazon.in/dp/B0CQVRKCSY',
    product_photo:
      'https://m.media-amazon.com/images/I/71GKbs-kJ1L._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹9,999',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '4K+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    has_variations: true,
  },
  {
    asin: 'B0CNX6WVG5',
    product_title:
      'Redmi 13C 5G (Startrail Green, 4GB RAM, 128GB Storage) | MediaTek Dimensity 6100+ 5G | 90Hz Display',
    product_price: '₹10,499',
    product_original_price: '₹13,999',
    currency: 'INR',
    product_star_rating: '4',
    product_num_ratings: 1382,
    product_url: 'https://www.amazon.in/dp/B0CNX6WVG5',
    product_photo:
      'https://m.media-amazon.com/images/I/81KFSdWCCEL._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹10,499',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '5K+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    coupon_text: 'Save ₹1,000 with coupon',
    has_variations: true,
  },
  {
    asin: 'B0CX74JKLL',
    product_title: 'Nothing Phone (2a) 5G (Black, 8GB RAM, 256GB Storage)',
    product_price: '₹25,475',
    product_original_price: '₹27,999',
    currency: 'INR',
    product_star_rating: '4',
    product_num_ratings: 63,
    product_url: 'https://www.amazon.in/dp/B0CX74JKLL',
    product_photo:
      'https://m.media-amazon.com/images/I/4172-I2V+AL._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 10,
    product_minimum_offer_price: '₹25,469',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '500+ bought in past month',
    delivery: 'FREE delivery Sat, 27 Jul Or fastest delivery Tomorrow, 20 Jul',
    has_variations: false,
  },
  {
    asin: 'B0D3GYZ82S',
    product_title:
      'realme NARZO N65 5G (Amber Gold 6GB RAM, 128GB Storage) India&#x27;s 1st D6300 5G Chipset | Ultra Slim Design | 120Hz Eye Comfort Display | 50MP AI Camera| Charger in The box',
    product_price: '₹12,498',
    product_original_price: '₹14,999',
    currency: 'INR',
    product_star_rating: '4.1',
    product_num_ratings: 236,
    product_url: 'https://www.amazon.in/dp/B0D3GYZ82S',
    product_photo:
      'https://m.media-amazon.com/images/I/71ocQY+G2XL._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹12,498',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '5K+ bought in past month',
    delivery: 'FREE delivery Mon, 22 Jul Or fastest delivery Tomorrow, 20 Jul',
    coupon_text: 'Save ₹1,500 with coupon',
    has_variations: true,
  },
  {
    asin: 'B0D3WVGD5H',
    product_title:
      'realme NARZO 70x 5G (Forest Green, 8GB RAM,128GB Storage) | 120Hz Ultra Smooth Display | Dimensity 6100+ 6nm 5G | 50MP AI Camera | 45W Charger in The Box',
    product_price: '₹14,998',
    product_original_price: '₹18,999',
    currency: 'INR',
    product_star_rating: '4',
    product_num_ratings: 712,
    product_url: 'https://www.amazon.in/dp/B0D3WVGD5H',
    product_photo:
      'https://m.media-amazon.com/images/I/71h8NUTmBOL._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹14,998',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '4K+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    coupon_text: 'Save ₹1,500 with coupon',
    has_variations: true,
  },
  {
    asin: 'B0CV3DZ1HM',
    product_title:
      'Redmi A3 (Midnight Black, 3GB RAM, 64GB Storage) | Premium Halo Design | 90Hz Display | Powerful 4G G36 Processor',
    product_price: '₹6,999',
    product_original_price: '₹9,999',
    currency: 'INR',
    product_star_rating: '3.6',
    product_num_ratings: 297,
    product_url: 'https://www.amazon.in/dp/B0CV3DZ1HM',
    product_photo:
      'https://m.media-amazon.com/images/I/71dkUkkFDeL._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹6,999',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '500+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    has_variations: true,
  },
  {
    asin: 'B0CVL9MSCK',
    product_title:
      'Nokia G42 5G Powered by Snapdragon® 480 Plus 5G | 50MP Triple Rear AI Camera | 6GB RAM (4GB RAM + 2GB Virtual RAM) | 128GB Storage | 3-day Battery Life | 2 Years of Android Upgrades | SO Grey',
    product_price: '₹9,499',
    product_original_price: '₹12,999',
    currency: 'INR',
    product_star_rating: '3.9',
    product_num_ratings: 4319,
    product_url: 'https://www.amazon.in/dp/B0CVL9MSCK',
    product_photo:
      'https://m.media-amazon.com/images/I/71oIjjNm+nL._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹9,499',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '500+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    has_variations: true,
  },
  {
    asin: 'B0D5YCYS1G',
    product_title:
      'OnePlus Nord CE4 Lite 5G (Super Silver, 8GB RAM, 128GB Storage)',
    product_price: '₹19,999',
    product_original_price: '₹20,999',
    currency: 'INR',
    product_star_rating: '4.2',
    product_num_ratings: 125,
    product_url: 'https://www.amazon.in/dp/B0D5YCYS1G',
    product_photo:
      'https://m.media-amazon.com/images/I/61Io5-ojWUL._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹19,999',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '5K+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    has_variations: false,
  },
  {
    asin: 'B0CDRVG19T',
    product_title: 'POCO M6 Pro 5G (128 GB) (6 GB RAM) (Power Black)',
    product_price: '₹9,998',
    product_original_price: '₹16,999',
    currency: 'INR',
    product_star_rating: '3.8',
    product_num_ratings: 3254,
    product_url: 'https://www.amazon.in/dp/B0CDRVG19T',
    product_photo:
      'https://m.media-amazon.com/images/I/51dGqSFNrDL._AC_UY654_FMwebp_QL65_.jpg',
    product_num_offers: 1,
    product_minimum_offer_price: '₹9,998',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: true,
    climate_pledge_friendly: false,
    sales_volume: '5K+ bought in past month',
    delivery: 'FREE delivery Sun, 21 Jul Or fastest delivery Tomorrow, 20 Jul',
    has_variations: true,
  },
];

const review = [
  {
    review_id: 'RS6TPEEDIONGR',
    review_title: 'Nice product',
    review_comment:
      'Phone looks so nice with a bigger display size, super quality in this range 👌 picture quality is also superb.',
    review_star_rating: '5',
    review_link: 'https://www.amazon.in/gp/customer-reviews/RS6TPEEDIONGR',
    review_author: 'Alka Arya ',
    review_author_avatar:
      'https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png',
    review_images: [],
    review_video: null,
    review_date: 'Reviewed in India on 16 July 2024',
    is_verified_purchase: true,
    helpful_vote_statement: '2 people found this helpful',
    reviewed_product_asin: 'B0CMTTRN8M',
  },
  {
    review_id: 'RX7FYQJ1ORX58',
    review_title: 'Nice phone',
    review_comment:
      "This phone is one of the best phone under 20000,the camera is also nice but this phone is a bit laggy , but overall it's nice and can work for 2 years very easily.",
    review_star_rating: '4',
    review_link: 'https://www.amazon.in/gp/customer-reviews/RX7FYQJ1ORX58',
    review_author: 'nk',
    review_author_avatar:
      'https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png',
    review_images: [],
    review_video: null,
    review_date: 'Reviewed in India on 20 May 2024',
    is_verified_purchase: true,
    helpful_vote_statement: '13 people found this helpful',
    reviewed_product_asin: 'B0CMTTRN8M',
  },
  {
    review_id: 'R3AYPGE4ZQOGFM',
    review_title: 'Best phone in such reasonable price',
    review_comment:
      "It has very clear camera both front and rear. Battery backup is so good. No one can imagine it's price by it looks and other features. Highly recommend.",
    review_star_rating: '5',
    review_link: 'https://www.amazon.in/gp/customer-reviews/R3AYPGE4ZQOGFM',
    review_author: 'sheema chowdhry',
    review_author_avatar:
      'https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/83205ebe-32a6-48c8-ac81-b0a20bb7ca46._CR0,0,375,375_SX48_.jpg',
    review_images: [],
    review_video: null,
    review_date: 'Reviewed in India on 9 July 2024',
    is_verified_purchase: true,
    helpful_vote_statement: '2 people found this helpful',
    reviewed_product_asin: 'B0CMTY5P4V',
  },
  {
    review_id: 'R20QI2XW1A2Z0V',
    review_title: 'This budget good quality product',
    review_comment:
      "90hz screen but good qaulity screen\n50mp camera but quality was poor\n1080p video quality is ok\nFunction smoothly\nIt's not for high revolution game\nAnd HD video",
    review_star_rating: '4',
    review_link: 'https://www.amazon.in/gp/customer-reviews/R20QI2XW1A2Z0V',
    review_author: 'Abhishek shinde',
    review_author_avatar:
      'https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png',
    review_images: [],
    review_video: null,
    review_date: 'Reviewed in India on 13 July 2024',
    is_verified_purchase: true,
    reviewed_product_asin: 'B0CMTZNPXR',
  },
  {
    review_id: 'R79A4Q46NCOYY',
    review_title: 'nice phone but low volume',
    review_comment: 'volume level is low',
    review_star_rating: '3',
    review_link: 'https://www.amazon.in/gp/customer-reviews/R79A4Q46NCOYY',
    review_author: 'Vishnu malviya',
    review_author_avatar:
      'https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png',
    review_images: [],
    review_video: null,
    review_date: 'Reviewed in India on 24 June 2024',
    is_verified_purchase: true,
    reviewed_product_asin: 'B0CMTY5P4V',
  },
  {
    review_id: 'R1K72J15O1DJM4',
    review_title: 'Nice One',
    review_comment:
      'A good 4 G phone. Price is appreciated. Works well. Good display size. Dimensity works perfect. Cmera also better for this price',
    review_star_rating: '5',
    review_link: 'https://www.amazon.in/gp/customer-reviews/R1K72J15O1DJM4',
    review_author: 'Anu',
    review_author_avatar:
      'https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png',
    review_images: [],
    review_video: null,
    review_date: 'Reviewed in India on 6 July 2024',
    is_verified_purchase: true,
    reviewed_product_asin: 'B0CMTW9MVK',
  },
  {
    review_id: 'R2F2EN5XBANLAF',
    review_title: 'Gud budget family phone',
    review_comment:
      'Mobile is very gud family wise and very helpful for homies and all battery life is too gud and appearance is delicate and connectivity is flawless as well as picture quality is too gud indor and outdoor in this budget along with good processor with great gaming experience and the brightness is also seameass in open light.',
    review_star_rating: '5',
    review_link: 'https://www.amazon.in/gp/customer-reviews/R2F2EN5XBANLAF',
    review_author: 'Siddharth Agrawal',
    review_author_avatar:
      'https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png',
    review_images: [],
    review_video: null,
    review_date: 'Reviewed in India on 12 July 2024',
    is_verified_purchase: true,
    helpful_vote_statement: '2 people found this helpful',
    reviewed_product_asin: 'B0CMTW9MVK',
  },
  {
    review_id: 'R1SGCDYHOZV2YD',
    review_title: '13C 6/128gb',
    review_comment:
      'After 3days of usage for 6/128gb phone myoverall experience is good whether it comes in terms for camera clarity, games, phone system processor.,display quality is very good as compare to price range of this phone. No heating issues and no lagging issues were found till now\nCons -speaker Sound of this phone is not upto the mark quality need to be improved .\nBattery 🔋drains very early as compare to other phones with same battery size. As I have to charge my new phone twice due to heavy internet usage.\n\n🔋⚡ takes approx more than 2hours to be full .\n\nNo quick charging is there in this phone.\n\nOverall we can consider this phone if u are okay with the battery 🔋in this budget.',
    review_star_rating: '4',
    review_link: 'https://www.amazon.in/gp/customer-reviews/R1SGCDYHOZV2YD',
    review_author: 'nipun jain',
    review_author_avatar:
      'https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png',
    review_images: [],
    review_video: null,
    review_date: 'Reviewed in India on 4 June 2024',
    is_verified_purchase: true,
    helpful_vote_statement: '12 people found this helpful',
    reviewed_product_asin: 'B0CMTX362W',
  },
  {
    review_id: 'R3AXQIS8VHYOH2',
    review_title: 'Amazon paking R damage',
    review_comment:
      'आज 8.7.2024 को मैंने यह फोन लिया था इसको चला कर देखूंगा कैसा है फिर अच्छे से रिव्यू करूंगा लेकिन मुझे एक कमी लगी वह यह है अमेजॉन पैकिंग की इसकी सील टूटी हुई मिली मुझे और जो डिब्बे के अंदर पेपर होते हैं वह भी नहीं मिले हल्का सा साइड में चोट का निशान भी है स्क्रीन के बराबर में देखता हूं इसका बैटरी बैकअप कैसा है कैमरा कैसा है हिटिंग प्रॉब्लम कैसी है दोबारा से रिव्यू एडिट करुंगा मैं यह जो 3 स्टार रेटिंग दे रहा हूं यह पैकिंग के लिए है और होलसेलर के लिए है मुझे नहीं पता मेरे डब्बे के अंदर कागज क्यों नहीं है यह होलसेलर की लापरवाही है या रास्ते में बदल दिए गए हैं  प्रॉब्लम तो अमेजॉन ही दिखेगा आज 12 तारीख है दोस्तों आज मैं दोबारा से रिव्यू कर रहा हूं इस फोन की बैटरी बहुत बेकार है इस फोन की बैटरी रखे रखे बगैर इस्तेमाल किया ही सुबह से शाम तक 30% खत्म हो गई अभी तो लिए इसको चार दिन ही हुए हैं अभी से यह हाल है तो आगे क्या होगा मुझे कुछ समझ में नहीं आ रहा है बैटरी के मामले में मुझे वीवो के फोन अच्छे लगते हैं यह फोन सस्ता मिल रहा था इसलिए मैंने इसको खरीद लिया चलो ठीक है 2 साल चला के इसको फिर से बेच देंगे दोस्तों आज 18 तारीख है आज मैं एक प्रॉब्लम फेस कर रहा हूं वह है इसके हैंग होने की यह फोन इतना ज्यादा हैंग हो रहा है मुझे समझ में नहीं आ रहा है मैं क्या करूं दोस्तों मैं तो यह सलाह दूंगा कि यह फोन बिल्कुल भी मत लेना मैं तो इस को लेकर अभी से परेशान हूं अभी मुझे एक महीना भी नहीं हुआ है और यह इतना ज्यादा हैंग हो रहा है',
    review_star_rating: '3',
    review_link: 'https://www.amazon.in/gp/customer-reviews/R3AXQIS8VHYOH2',
    review_author: 'Placeholder',
    review_author_avatar:
      'https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png',
    review_images: [
      'https://m.media-amazon.com/images/I/713X2kwTezL._SY88.jpg',
      'https://m.media-amazon.com/images/I/71Wofd9SUAL._SY88.jpg',
    ],
    review_video: null,
    review_date: 'Reviewed in India on 8 July 2024',
    is_verified_purchase: true,
    helpful_vote_statement: '8 people found this helpful',
    reviewed_product_asin: 'B0CMTZNPXR',
  },
  {
    review_id: 'R2TIZ0TFY9IFCC',
    review_title: 'Good',
    review_comment: 'Nice running after 3 months of purchase',
    review_star_rating: '4',
    review_link: 'https://www.amazon.in/gp/customer-reviews/R2TIZ0TFY9IFCC',
    review_author: 'Mandeep',
    review_author_avatar:
      'https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png',
    review_images: [],
    review_video: null,
    review_date: 'Reviewed in India on 18 July 2024',
    is_verified_purchase: true,
    reviewed_product_asin: 'B0CMTZNPXR',
  },
];

const deals = [
  {
    deal_id: '4f9d45c8',
    deal_type: 'BEST_DEAL',
    deal_title:
      'Apple AirPods Max Wireless Over-Ear Headphones, Active Noise Cancelling, Transparency Mode, Personalized Spatial Audio, Dolby Atmos, Bluetooth Headphones for iPhone – Pink',
    deal_photo: 'https://m.media-amazon.com/images/I/81NIpE9-5mL.jpg',
    deal_state: 'AVAILABLE',
    deal_url: 'https://www.amazon.com/New-Apple-AirPods-Max-Pink/dp/B08PZJ8FZ8',
    canonical_deal_url: 'https://www.amazon.com/deal/4f9d45c8',
    deal_starts_at: '2024-07-22T07:00:00.000Z',
    deal_ends_at: '2024-07-29T07:00:00.000Z',
    deal_badge: '30% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B08PZJ8FZ8',
  },
  {
    deal_id: 'd718ad2a',
    deal_type: 'BEST_DEAL',
    deal_title:
      'AOC Laptop Computer 16GB RAM 512GB SSD Gaming Laptops 15.6 Inch FHD Screen Premium Laptop (Up to 3.6GHz) Windows 11 Laptop Computer, Light&Thin, Metal Shell, Webcam, Type-C, USB3.2, Grey',
    deal_photo: 'https://m.media-amazon.com/images/I/71THjdzBUtL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/AOC-Computer-Laptops-Premium-Windows/dp/B0D66DHSZF',
    canonical_deal_url: 'https://www.amazon.com/deal/d718ad2a',
    deal_starts_at: '2024-07-22T07:00:00.000Z',
    deal_ends_at: '2024-07-29T06:45:00.000Z',
    deal_badge: '73% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B0D66DHSZF',
  },
  {
    deal_id: '03aa0972',
    deal_type: 'BEST_DEAL',
    deal_title:
      'Breville Barista Express Espresso Machine BES870XL, Brushed Stainless Steel',
    deal_photo: 'https://m.media-amazon.com/images/I/71BvCt6eAFL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/Breville-BES870XL-Barista-Express-Espresso/dp/B00CH9QWOU',
    canonical_deal_url: 'https://www.amazon.com/deal/03aa0972',
    deal_starts_at: '2024-07-21T07:00:00.000Z',
    deal_ends_at: '2024-07-28T06:59:59.000Z',
    deal_badge: '27% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B00CH9QWOU',
  },
  {
    deal_id: '6a7e43e8',
    deal_type: 'BEST_DEAL',
    deal_title:
      'DJI Air 3 Fly More Combo with DJI RC 2, Drone with Camera 4K, Dual Primary Cameras, 3 Batteries for Extended Flight Time, 48MP Photo, 20Km Max Video Transmission, FAA Remote ID Compliant',
    deal_photo: 'https://m.media-amazon.com/images/I/61CT+m4UmhL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/DJI-Controller-Wide-Angle-Primary-Batteries/dp/B07FRWP5HX',
    canonical_deal_url: 'https://www.amazon.com/deal/6a7e43e8',
    deal_starts_at: '2024-07-15T07:00:00.000Z',
    deal_ends_at: '2024-07-23T06:59:59.000Z',
    deal_badge: '26% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B07FRWP5HX',
  },
  {
    deal_id: 'c5779e75',
    deal_type: 'BEST_DEAL',
    deal_title:
      'Amazon Fire TV Stick, HD, sharp picture quality, fast streaming, free & live TV, Alexa Voice Remote with TV controls',
    deal_photo: 'https://m.media-amazon.com/images/I/51TjJOTfslL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/fire-tv-stick-with-3rd-gen-alexa-voice-remote/dp/B08C1W5N87',
    canonical_deal_url: 'https://www.amazon.com/deal/c5779e75',
    deal_starts_at: '2024-07-18T15:00:00.000Z',
    deal_ends_at: '2024-07-23T15:55:00.000Z',
    deal_badge: '45% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B08C1W5N87',
  },
  {
    deal_id: '80ab2e7f',
    deal_type: 'BEST_DEAL',
    deal_title:
      'iRobot Roomba j7+ (7550) Self-Emptying Robot Vacuum – Uses PrecisionVision Navigation to identify & avoid objects like Socks, Shoes, & Pet Waste, Smart Mapping, Self-Empty for Up to 60 Days',
    deal_photo: 'https://m.media-amazon.com/images/I/71NwZ7H+zEL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/iRobot-Roomba-Self-Emptying-Robot-Vacuum/dp/B094NYHTMF',
    canonical_deal_url: 'https://www.amazon.com/deal/80ab2e7f',
    deal_starts_at: '2024-07-22T07:00:00.000Z',
    deal_ends_at: '2024-07-28T06:59:59.000Z',
    deal_badge: '46% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B094NYHTMF',
  },
  {
    deal_id: 'aba6046f',
    deal_type: 'BEST_DEAL',
    deal_title:
      'EF ECOFLOW Solar Generator 120V/3.6KWh DELTA Pro with 400W Portable Solar Panel, 23% High Efficiency, 5 AC Outlets, 3600W Portable Power Station for Home Backup Outdoors Camping RV Emergency',
    deal_photo: 'https://m.media-amazon.com/images/I/61uDrKlmVNL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/EF-ECOFLOW-Generator-Portable-Emergency/dp/B0B1TCMZHZ',
    canonical_deal_url: 'https://www.amazon.com/deal/aba6046f',
    deal_starts_at: '2024-07-22T07:00:00.000Z',
    deal_ends_at: '2024-07-29T06:45:00.000Z',
    deal_badge: '38% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B0B1TCMZHZ',
  },
  {
    deal_id: '6e7ee70f',
    deal_type: 'BEST_DEAL',
    deal_title:
      'SAMSUNG Galaxy Z Fold 6 AI Cell Phone + $300 Amazon Gift Card + Large Storage Preorder Bundle 512GB Unlocked Android Smartphone, Circle to Search, US Version, 2024, Silver Shadow',
    deal_photo: 'https://m.media-amazon.com/images/I/61xNZFprQAL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/SAMSUNG-Storage-Preorder-Unlocked-Smartphone/dp/B0D64YKWP1',
    canonical_deal_url: 'https://www.amazon.com/deal/6e7ee70f',
    deal_starts_at: '2024-07-10T13:00:00.000Z',
    deal_ends_at: '2024-07-24T06:59:59.000Z',
    deal_badge: '18% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B0D64YKWP1',
  },
  {
    deal_id: '5ca401c3',
    deal_type: 'BEST_DEAL',
    deal_title:
      'HP DeskJet 2855e Wireless All-in-One Color Inkjet Printer, Scanner, Copier, Best-for-home, 3 months of ink included (588S5A)',
    deal_photo: 'https://m.media-amazon.com/images/I/61+biEwB1hL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/HP-DeskJet-Wireless-included-588S5A/dp/B0CT2R7199',
    canonical_deal_url: 'https://www.amazon.com/deal/5ca401c3',
    deal_starts_at: '2024-07-21T07:00:00.000Z',
    deal_ends_at: '2024-07-28T06:59:59.000Z',
    deal_badge: '41% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B0CT2R7199',
  },
  {
    deal_id: '234fb802',
    deal_type: 'BEST_DEAL',
    deal_title:
      'Coolife Luggage Expandable Suitcase PC+ABS 3 Piece Set with TSA Lock Spinner 20in24in28in',
    deal_photo: 'https://m.media-amazon.com/images/I/71L7ZJF78IL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/Coolife-Luggage-Expandable-Suitcase-20in24in28in/dp/B0CH7QWNCH',
    canonical_deal_url: 'https://www.amazon.com/deal/234fb802',
    deal_starts_at: '2024-07-22T07:00:00.000Z',
    deal_ends_at: '2024-07-29T06:45:00.000Z',
    deal_badge: '10% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B0CH7QWNCH',
  },
  {
    deal_id: '97ff9c1f',
    deal_type: 'BEST_DEAL',
    deal_title:
      'Electric Spin Scrubber, Cordless Bathroom Shower Cleaner, Cleaning Brush with 9 Brush Heads 2H Power Dual Speed, Adjustable Extension Handle, IPX7 Waterproof for Tub Tile Floor Car, CA3-White',
    deal_photo: 'https://m.media-amazon.com/images/I/71Tsst7Gj-L.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/Electric-Adjustable-Extension-Waterproof-CA3-White/dp/B0D3BN5JV6',
    canonical_deal_url: 'https://www.amazon.com/deal/97ff9c1f',
    deal_starts_at: '2024-07-22T07:00:00.000Z',
    deal_ends_at: '2024-07-29T06:45:00.000Z',
    deal_badge: '90% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B0D3BN5JV6',
  },
  {
    deal_id: '6524fd4e',
    deal_type: 'BEST_DEAL',
    deal_title:
      'EF ECOFLOW Portable Power Station RIVER 2 Pro, 768Wh LiFePO4 Battery, 70 Min Fast Charging, 4X800W (X-Boost 1600W) AC Outlets, Solar Generator for Outdoor Camping/RVs/Home Use Black',
    deal_photo: 'https://m.media-amazon.com/images/I/61ooUabaG9L.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/EF-ECOFLOW-Portable-Charging-Generator/dp/B0BVLPGS79',
    canonical_deal_url: 'https://www.amazon.com/deal/6524fd4e',
    deal_starts_at: '2024-07-22T07:00:00.000Z',
    deal_ends_at: '2024-07-29T06:45:00.000Z',
    deal_badge: '37% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B0BVLPGS79',
  },
  {
    deal_id: 'acc50c41',
    deal_type: 'BEST_DEAL',
    deal_title:
      'Jackery Solar Generator 1000 v2 with 200W Solar Panel(2024 New),1070Wh Portable Power Station LiFePO4 Battery,1500W AC/100W USB-C Output,1Hr Fast Charge for Outdoor,Off-Grid Living,RV,Emergency',
    deal_photo: 'https://m.media-amazon.com/images/I/61jG+VKgUTL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/Jackery-Generator-Portable-Off-Grid-Emergency/dp/B0D2L1G66J',
    canonical_deal_url: 'https://www.amazon.com/deal/acc50c41',
    deal_starts_at: '2024-07-22T07:00:00.000Z',
    deal_ends_at: '2024-07-29T06:45:00.000Z',
    deal_badge: '31% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B0D2L1G66J',
  },
  {
    deal_id: '665090e6',
    deal_type: 'BEST_DEAL',
    deal_title:
      'Bissell Little Green Pet Deluxe Portable Carpet Cleaner and Car/Auto Detailer, 3353, Gray/Blue',
    deal_photo: 'https://m.media-amazon.com/images/I/81LE-vDwQ2L.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/BISSELL-Little-Portable-Cleaner-3353/dp/B09XFGWM2B',
    canonical_deal_url: 'https://www.amazon.com/deal/665090e6',
    deal_starts_at: '2024-07-18T07:00:00.000Z',
    deal_ends_at: '2024-09-05T06:59:59.000Z',
    deal_badge: '29% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B09XFGWM2B',
  },
  {
    deal_id: '077df4a1',
    deal_type: 'BEST_DEAL',
    deal_title:
      'EF ECOFLOW Portable Power Station 3600Wh DELTA Pro, 120V AC Outlets x 5, 3600W, 2.7H Fast Charge, Lifepo4 Power Station, Solar Generator for Home Use, Power Outage, Camping, RV, Emergencies',
    deal_photo: 'https://m.media-amazon.com/images/I/61qMM6iBt3L.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/EF-ECOFLOW-3600-4500W-Generator-Emergencies/dp/B0C1Z4GLKS',
    canonical_deal_url: 'https://www.amazon.com/deal/077df4a1',
    deal_starts_at: '2024-07-22T07:00:00.000Z',
    deal_ends_at: '2024-07-29T06:45:00.000Z',
    deal_badge: '42% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B0C1Z4GLKS',
  },
  {
    deal_id: '7c9cab98',
    deal_type: 'BEST_DEAL',
    deal_title:
      'Hisense 50-Inch Class U6HF Series ULED 4K UHD Smart Fire TV (50U6HF) - QLED, 600-Nit Dolby Vision, HDR 10 plus, 240 Motion Rate, Voice Remote, Compatible with Alexa, Black',
    deal_photo: 'https://m.media-amazon.com/images/I/71oAhtaqY1L.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/Hisense-50-inch-Quantum-Smart-50U6HF/dp/B09WNJT9X3',
    canonical_deal_url: 'https://www.amazon.com/deal/7c9cab98',
    deal_starts_at: '2024-07-16T07:00:00.000Z',
    deal_ends_at: '2024-08-05T06:59:59.000Z',
    deal_badge: '23% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B09WNJT9X3',
  },
  {
    deal_id: '6e7ee70f',
    deal_type: 'BEST_DEAL',
    deal_title:
      'SAMSUNG Galaxy Z Flip 6 AI Cell Phone + $200 Amazon Gift Card + Large Storage Preorder Bundle, 512GB Unlocked Android Smartphone, FlexCam Camera, Photo Assist, US Version, 2024, Silver',
    deal_photo: 'https://m.media-amazon.com/images/I/41UFErg18mL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/SAMSUNG-Storage-Preorder-Unlocked-Smartphone/dp/B0D64PM7R9',
    canonical_deal_url: 'https://www.amazon.com/deal/6e7ee70f',
    deal_starts_at: '2024-07-10T13:00:00.000Z',
    deal_ends_at: '2024-07-24T06:59:59.000Z',
    deal_badge: '22% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B0D64PM7R9',
  },
  {
    deal_id: 'bca768af',
    deal_type: 'BEST_DEAL',
    deal_title:
      'EF ECOFLOW DELTA 2 Max Power Station Extra Battery, 2048Wh LiFePO4 (LFP) Battery, Compatible with DELTA 2&DELTA Max 2000&DELTA 2 Max Outdoor Generators',
    deal_photo: 'https://m.media-amazon.com/images/I/51oF7HEO3aL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/EF-ECOFLOW-Station-Compatible-Generators/dp/B0CPP81GNL',
    canonical_deal_url: 'https://www.amazon.com/deal/bca768af',
    deal_starts_at: '2024-07-22T07:00:00.000Z',
    deal_ends_at: '2024-07-29T06:45:00.000Z',
    deal_badge: '36% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B0CPP81GNL',
  },
  {
    deal_id: '34f2466b',
    deal_type: 'BEST_DEAL',
    deal_title:
      'dreame L20 Ultra Robot Vacuum and Mop with Mop-Extend, Auto Mop Removal & Raising, Washing and Drying, 7000Pa Suction, Self-Emptying, Self-Refilling, AI Obstacle Avoidance',
    deal_photo: 'https://m.media-amazon.com/images/I/71iNk4UTPDL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/dreame-Mop-Extend-Self-Emptying-Self-Refilling-Avoidance/dp/B0CC236CLT',
    canonical_deal_url: 'https://www.amazon.com/deal/34f2466b',
    deal_starts_at: '2024-07-22T07:00:00.000Z',
    deal_ends_at: '2024-07-29T06:45:00.000Z',
    deal_badge: '43% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B0CC236CLT',
  },
  {
    deal_id: '8b460fc2',
    deal_type: 'BEST_DEAL',
    deal_title:
      'Lego Star Wars: Ahsoka New Republic E-Wing vs. Shin Hati’s Starfighter 75364 Star Wars Playset Based on The Ahsoka TV Series, Show Inspired Building Toy for Ahsoka Fans Featuring 5 Star Wars Figures',
    deal_photo: 'https://m.media-amazon.com/images/I/81MoqASaGlL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/LEGO-Star-Wars-Wing-Starfighter/dp/B0BXQ47X99',
    canonical_deal_url: 'https://www.amazon.com/deal/8b460fc2',
    deal_starts_at: '2024-07-22T07:00:00.000Z',
    deal_ends_at: '2024-07-29T07:00:00.000Z',
    deal_badge: '26% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B0BXQ47X99',
  },
  {
    deal_id: '494ced2f',
    deal_type: 'BEST_DEAL',
    deal_title:
      'Sperax Walking Pad,Under Desk Treadmills for Home,340 Lbs Capacity,3 in 1 Portable Walking Pad',
    deal_photo: 'https://m.media-amazon.com/images/I/61E-t1xEXFL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/Sperax-Walking-Treadmill-Treadmills-Capacity/dp/B0C48GQJNC',
    canonical_deal_url: 'https://www.amazon.com/deal/494ced2f',
    deal_starts_at: '2024-07-22T07:00:00.000Z',
    deal_ends_at: '2024-07-29T06:45:00.000Z',
    deal_badge: '93% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B0C48GQJNC',
  },
  {
    deal_id: '3dac4f95',
    deal_type: 'BEST_DEAL',
    deal_title:
      'Hair Dryer - 150000 RPM High-Speed Brushless Motor Negative Ionic Blow Dryer for Fast Drying, Low Noise Thermo-Control Hair Dryer with Diffuser and Nozzle, Silvery',
    deal_photo: 'https://m.media-amazon.com/images/I/71xBAYOL5sL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/Hair-Dryer-High-Speed-Brushless-Thermo-Control/dp/B0CGL31SR2',
    canonical_deal_url: 'https://www.amazon.com/deal/3dac4f95',
    deal_starts_at: '2024-07-22T07:00:00.000Z',
    deal_ends_at: '2024-07-29T06:45:00.000Z',
    deal_badge: '75% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B0CGL31SR2',
  },
  {
    deal_id: '9b7bc342',
    deal_type: 'BEST_DEAL',
    deal_title:
      'EF ECOFLOW Solar Generator DELTA Max (2000) 2016Wh with 220W Solar Panel, 6 X 2400W (5000W Surge) AC Outlets, Portable Power Station for Home Backup Outdoors Camping RV Emergency',
    deal_photo: 'https://m.media-amazon.com/images/I/61xwu6JH-lL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/EF-ECOFLOW-Generator-Portable-Emergency/dp/B09XTZBCH6',
    canonical_deal_url: 'https://www.amazon.com/deal/9b7bc342',
    deal_starts_at: '2024-07-22T07:00:00.000Z',
    deal_ends_at: '2024-07-29T06:45:00.000Z',
    deal_badge: '43% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B09XTZBCH6',
  },
  {
    deal_id: '88e9e1e2',
    deal_type: 'BEST_DEAL',
    deal_title:
      'Amazon Fire TV 65" Omni Series 4K UHD smart TV with Dolby Vision, hands-free with Alexa',
    deal_photo: 'https://m.media-amazon.com/images/I/71chDCfFfYL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/amazon-fire-tv-65-inch-omni-series-4k-smart-tv/dp/B08T6J1HG8',
    canonical_deal_url: 'https://www.amazon.com/deal/88e9e1e2',
    deal_starts_at: '2024-07-18T07:00:00.000Z',
    deal_ends_at: '2024-07-29T15:55:00.000Z',
    deal_badge: '26% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B08T6J1HG8',
  },
  {
    deal_id: '78d55ef8',
    deal_type: 'BEST_DEAL',
    deal_title:
      'Bedsure White Duvet Cover Queen Size - Soft Prewashed Queen Duvet Cover Set, 3 Pieces, 1 Duvet Cover 90x90 Inches with Zipper Closure and 2 Pillow Shams, Comforter Not Included',
    deal_photo: 'https://m.media-amazon.com/images/I/81QF0RHosBL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/BEDSURE-White-Duvet-Cover-Queen/dp/B07PCQKTCN',
    canonical_deal_url: 'https://www.amazon.com/deal/78d55ef8',
    deal_starts_at: '2024-07-22T07:00:00.000Z',
    deal_ends_at: '2024-07-29T06:45:00.000Z',
    deal_badge: '55% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B07PCQKTCN',
  },
  {
    deal_id: '0651d343',
    deal_type: 'BEST_DEAL',
    deal_title:
      'roborock Qrevo S Robot Vacuum and Mop, Self-Drying, Auto Mop Washing, 7000Pa Suction, Self-Emptying & Refilling, 10mm Mop Lifting, 200RPM Spinning Mops, Smart Obstacle Avoidance, Black',
    deal_photo: 'https://m.media-amazon.com/images/I/61iE99S8DwL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/roborock-Qrevo-Self-Drying-Self-Emptying-Refilling/dp/B0CTZXJTGJ',
    canonical_deal_url: 'https://www.amazon.com/deal/0651d343',
    deal_starts_at: '2024-07-22T07:00:00.000Z',
    deal_ends_at: '2024-07-29T06:45:00.000Z',
    deal_badge: '25% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B0CTZXJTGJ',
  },
  {
    deal_id: '8ae64323',
    deal_type: 'BEST_DEAL',
    deal_title:
      'JBL PartyBox Stage 320 - Portable party speaker with telescopic handle & wide, sturdy Wheels, Powerful JBL Pro Sound, Futuristic lightshow, Up to 18 hours of play time, Splash proof (Black)',
    deal_photo: 'https://m.media-amazon.com/images/I/61F-k33n0AL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/JBL-PartyBox-Stage-320-telescopic/dp/B0CTD6V6S6',
    canonical_deal_url: 'https://www.amazon.com/deal/8ae64323',
    deal_starts_at: '2024-07-21T04:00:00.000Z',
    deal_ends_at: '2024-08-05T03:55:00.000Z',
    deal_badge: '17% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B0CTD6V6S6',
  },
  {
    deal_id: '7d4bdfc8',
    deal_type: 'BEST_DEAL',
    deal_title:
      'Bluetooth Speaker with HD Sound, Portable Wireless, IPX5 Waterproof, Up to 24H Playtime, TWS Pairing, BT5.3, for Home/Party/Outdoor/Beach, Electronic Gadgets, Birthday Gift (Black)',
    deal_photo: 'https://m.media-amazon.com/images/I/81djh1gfUwL.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/Bluetooth-Waterproof-Playtime-Portable-Electronic/dp/B0BRKPVZB4',
    canonical_deal_url: 'https://www.amazon.com/deal/7d4bdfc8',
    deal_starts_at: '2024-07-22T07:00:00.000Z',
    deal_ends_at: '2024-07-29T06:45:00.000Z',
    deal_badge: '67% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B0BRKPVZB4',
  },
  {
    deal_id: '55c84356',
    deal_type: 'BEST_DEAL',
    deal_title:
      "HelloBaby Upgrade Monitor, 5''Sreen with 30-Hour Battery, Pan-Tilt-Zoom Video Baby Monitor with Camera and Audio, Night Vision, VOX, 2-Way Talk, 8 Lullabies and 1000ft Range No WiFi",
    deal_photo: 'https://m.media-amazon.com/images/I/61WoQMri81L.jpg',
    deal_state: 'AVAILABLE',
    deal_url:
      'https://www.amazon.com/Monitor-5Display-Pan-Tilt-Zoom-Temperature-Lullabies/dp/B09GM8JZM9',
    canonical_deal_url: 'https://www.amazon.com/deal/55c84356',
    deal_starts_at: '2024-07-22T07:00:00.000Z',
    deal_ends_at: '2024-07-29T06:45:00.000Z',
    deal_badge: '32% off',
    type: 'SINGLE_ITEM',
    product_asin: 'B09GM8JZM9',
  },
];

const bestSeller = [
  {
    rank: 1,
    asin: 'B09H7GPR1G',
    product_title:
      'Microsoft Office Home & Student 2021 | Classic Apps: Word, Excel, PowerPoint | One-Time purchase for 1 PC/MAC | Instant Downl',
    product_price: '$149.99',
    product_star_rating: '4.1',
    product_num_ratings: 5805,
    product_url: 'https://www.amazon.com/dp/B09H7GPR1G',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/610LdTvXyFL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 2,
    asin: 'B07Q33SJDW',
    product_title:
      'Norton 360 Deluxe 2024, Antivirus software for 5 Devices with Auto Renewal - Includes VPN, PC Cloud Backup & Dark Web Monitor',
    product_price: '$24.99',
    product_star_rating: '4.2',
    product_num_ratings: 14766,
    product_url: 'https://www.amazon.com/dp/B07Q33SJDW',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/71XafXsPo6L._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 3,
    asin: 'B0823GT5JG',
    product_title: 'iFit Train - Monthly Membership',
    product_price: '$15.00',
    product_star_rating: '4.1',
    product_num_ratings: 543,
    product_url: 'https://www.amazon.com/dp/B0823GT5JG',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/518nPPYk0iL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 4,
    asin: 'B07K98XDX8',
    product_title:
      'McAfee Total Protection 2024 | 3 Device | Cybersecurity Software Includes Antivirus, Secure VPN, Password Manager, Dark Web M',
    product_price: '$19.99',
    product_star_rating: '4.1',
    product_num_ratings: 4778,
    product_url: 'https://www.amazon.com/dp/B07K98XDX8',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/61fF1k90QgL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 5,
    asin: 'B07CYFFH4H',
    product_title:
      'Bitdefender Total Security - 5 Devices | 1 year Subscription | PC/Mac | Activation Code by email',
    product_price: '$44.99',
    product_star_rating: '4.4',
    product_num_ratings: 2243,
    product_url: 'https://www.amazon.com/dp/B07CYFFH4H',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/714clBtOSiL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 6,
    asin: 'B09MYJ1R6L',
    product_title:
      'Microsoft System Builder | Windоws 11 Home | Intended use for new systems | Install on a new PC | Branded by Microsoft',
    product_price: '$119.99',
    product_star_rating: '4.3',
    product_num_ratings: 1284,
    product_url: 'https://www.amazon.com/dp/B09MYJ1R6L',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/61JfosHunyL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 7,
    asin: 'B07Q6B5YL5',
    product_title:
      'Norton 360 Premium 2024, Antivirus software for 10 Devices with Auto Renewal - Includes VPN, PC Cloud Backup & Dark Web Monit',
    product_price: '$29.99',
    product_star_rating: '4.2',
    product_num_ratings: 4682,
    product_url: 'https://www.amazon.com/dp/B07Q6B5YL5',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/71q3Z-U+2xL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 8,
    asin: 'B09C1RQQ2Z',
    product_title:
      'Norton 360 for Amazon 2024, Antivirus software for up to 5 Devices with Auto Renewal [Subscription]',
    product_price: '$34.99',
    product_star_rating: '4.1',
    product_num_ratings: 435,
    product_url: 'https://www.amazon.com/dp/B09C1RQQ2Z',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/710R2j7jEQL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 9,
    asin: 'B0BB2N69J8',
    product_title:
      'McAfee Total Protection 2024 | 3 Device | Cybersecurity Software Includes Antivirus, Secure VPN, Password Manager, Dark Web M',
    product_price: '$19.99',
    product_star_rating: '4.1',
    product_num_ratings: 4778,
    product_url: 'https://www.amazon.com/dp/B0BB2N69J8',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/61Xnk7S9JrL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 10,
    asin: 'B07K98LLVV',
    product_title:
      'McAfee Total Protection 2024 | 5 Device | Cybersecurity Software Includes Antivirus, Secure VPN, Password Manager, Dark Web M',
    product_price: '$24.99',
    product_star_rating: '4.2',
    product_num_ratings: 1098,
    product_url: 'https://www.amazon.com/dp/B07K98LLVV',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/61+NzthenlL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 11,
    asin: 'B07F3TQ6DQ',
    product_title:
      'Microsoft 365 Personal | 12-Month Subscription, 1 person | Word, Excel, PowerPoint | 1TB OneDrive cloud storage | PC/Mac Inst',
    product_price: '$69.99',
    product_star_rating: '4.4',
    product_num_ratings: 10776,
    product_url: 'https://www.amazon.com/dp/B07F3TQ6DQ',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/61pCCojbi-L._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 12,
    asin: 'B09WCTTXQ6',
    product_title:
      'Windows 11 Pro Upgrade, from Windows 11 Home (Digital Download)',
    product_price: '$99.00',
    product_star_rating: '3.9',
    product_num_ratings: 491,
    product_url: 'https://www.amazon.com/dp/B09WCTTXQ6',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/61R6ivLSfrL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 13,
    asin: 'B0CLBV27N2',
    product_title:
      'TurboTax Deluxe 2023 Tax Software, Federal & State Tax Return [Amazon Exclusive] [PC/Mac Download]',
    product_price: '$69.99',
    product_star_rating: '4.3',
    product_num_ratings: 14212,
    product_url: 'https://www.amazon.com/dp/B0CLBV27N2',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/719rCYQpjdL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 14,
    asin: 'B09H7F77JR',
    product_title:
      'Microsoft Office Home & Business 2021 | Word, Excel, PowerPoint, Outlook | One-time purchase for 1 PC or Mac | Instant Downlo',
    product_price: '$229.99',
    product_star_rating: '4.1',
    product_num_ratings: 813,
    product_url: 'https://www.amazon.com/dp/B09H7F77JR',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/61hSSVPvT3L._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 15,
    asin: 'B09VLYKW94',
    product_title:
      'Norton Utilities Ultimate – cleans and speeds up your PC, Windows PCs only [Download]',
    product_price: '$19.99',
    product_star_rating: '4.2',
    product_num_ratings: 555,
    product_url: 'https://www.amazon.com/dp/B09VLYKW94',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/61zuLMONS9L._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 16,
    asin: 'B0BZ2K72LD',
    product_title:
      'McAfee Total Protection 2024 Ready | 3 Devices | 15 Month Subscription | Cybersecurity software includes Antivirus, Secure VP',
    product_price: '$21.99',
    product_star_rating: '4.3',
    product_num_ratings: 242,
    product_url: 'https://www.amazon.com/dp/B0BZ2K72LD',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/61gAXg9bfCL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 17,
    asin: 'B0BB2N2YQ9',
    product_title:
      'McAfee AntiVirus Protection 2024 | 1 PC (Windows)| Cybersecurity software includes Antivirus Protection, Internet Security So',
    product_price: '$9.99',
    product_star_rating: '4.1',
    product_num_ratings: 707,
    product_url: 'https://www.amazon.com/dp/B0BB2N2YQ9',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/61Iy7n2u-jL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 18,
    asin: 'B0CLC5MKTP',
    product_title:
      'TurboTax Home & Business 2023 Tax Software, Federal & State Tax Return [Amazon Exclusive] [PC/Mac Download]',
    product_price: '$119.99',
    product_star_rating: '4.3',
    product_num_ratings: 4102,
    product_url: 'https://www.amazon.com/dp/B0CLC5MKTP',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/71K4wikrrkL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 19,
    asin: 'B07DDNL2BJ',
    product_title:
      'Webroot Antivirus Software 2024 | 3 Device | 1 Year Download for PC/Mac',
    product_price: '$15.99',
    product_star_rating: '4.3',
    product_num_ratings: 2861,
    product_url: 'https://www.amazon.com/dp/B07DDNL2BJ',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/51gkAQmNelL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 20,
    asin: 'B07QCVZW81',
    product_title:
      'Norton 360 Premium 2024, Antivirus software for 10 Devices with Auto Renewal - Includes VPN, PC Cloud Backup & Dark Web Monit',
    product_price: '$29.99',
    product_star_rating: '4.4',
    product_num_ratings: 6460,
    product_url: 'https://www.amazon.com/dp/B07QCVZW81',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/71+0sewCxOL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 21,
    asin: 'B07Q6ZPC1Q',
    product_title:
      'Adobe Acrobat Professional DC | Create, edit and sign PDF documents | 1-month Subscription with auto-renewal, PC/Mac',
    product_price: '$29.99',
    product_star_rating: '3.9',
    product_num_ratings: 1445,
    product_url: 'https://www.amazon.com/dp/B07Q6ZPC1Q',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/517ul+lt2GL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 22,
    asin: 'B09MYBD79G',
    product_title:
      'Microsoft OEM System Builder | Windоws 11 Pro | Intended use for new systems | Authorized by Microsoft',
    product_price: '$153.00',
    product_star_rating: '4.3',
    product_num_ratings: 1284,
    product_url: 'https://www.amazon.com/dp/B09MYBD79G',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/61p-Ylv5vtL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 23,
    asin: 'B07VGCN1K2',
    product_title:
      'Norton 360 Platinum 2024, Antivirus software for 20 Devices with Auto Renewal - 3 Months FREE - Includes VPN, PC Cloud Backup',
    product_price: '$39.99',
    product_star_rating: '4.4',
    product_num_ratings: 2054,
    product_url: 'https://www.amazon.com/dp/B07VGCN1K2',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/71eJpfjaDLL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 24,
    asin: 'B0CFSX431Z',
    product_title:
      'Quicken Classic Deluxe for New Subscribers| 1 Year [PC/Mac Online Code]',
    product_price: '$41.93',
    product_star_rating: '4.1',
    product_num_ratings: 97,
    product_url: 'https://www.amazon.com/dp/B0CFSX431Z',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/61ypcFpjCuL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 25,
    asin: 'B07Q8JGCSQ',
    product_title:
      'Norton 360 Deluxe 2024, Antivirus software for 3 Devices with Auto Renewal - Includes VPN, PC Cloud Backup & Dark Web Monitor',
    product_price: '$29.99',
    product_star_rating: '4.1',
    product_num_ratings: 4983,
    product_url: 'https://www.amazon.com/dp/B07Q8JGCSQ',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/71uuBMzSgrL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 26,
    asin: 'B0BB2GF9WW',
    product_title:
      'McAfee Total Protection 2024 | 5 Device | Cybersecurity Software Includes Antivirus, Secure VPN, Password Manager, Dark Web M',
    product_price: '$22.99',
    product_star_rating: '4.2',
    product_num_ratings: 1098,
    product_url: 'https://www.amazon.com/dp/B0BB2GF9WW',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/61g2gPUL7-L._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 27,
    asin: 'B07F3SNQT5',
    product_title:
      'Microsoft 365 Family | 12-Month Subscription, Up to 6 People | Word, Excel, PowerPoint | 1TB OneDrive Cloud Storage | PC/MAC ',
    product_price: '$99.99',
    product_star_rating: '4.4',
    product_num_ratings: 2730,
    product_url: 'https://www.amazon.com/dp/B07F3SNQT5',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/61qISsi8rAL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 28,
    asin: 'B0BB2N3SM3',
    product_title:
      'McAfee+ Premium 2024 Individual Plan | Unlimited Devices | Identity and Privacy Protection Software includes Unlimited Secure',
    product_price: '$29.99',
    product_star_rating: '4.2',
    product_num_ratings: 265,
    product_url: 'https://www.amazon.com/dp/B0BB2N3SM3',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/617HjGD0xCL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 29,
    asin: 'B076VQ4Y4J',
    product_title:
      'Laplink PCmover Ultimate 11 - Easily Move your Applications - Files and Settings from an Old PC to a New PC - Includes Option',
    product_price: '$39.95',
    product_star_rating: '4.1',
    product_num_ratings: 4977,
    product_url: 'https://www.amazon.com/dp/B076VQ4Y4J',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/51MC+P+rEpL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 30,
    asin: 'B07QHLRL1H',
    product_title:
      'Laplink PCmover Professional | Instant Download | Single Use License | Moves Applications, Files, and Settings to Your New PC',
    product_price: '$29.95',
    product_star_rating: '3.8',
    product_num_ratings: 1056,
    product_url: 'https://www.amazon.com/dp/B07QHLRL1H',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/81wHLB1TuAL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 31,
    asin: 'B0CLBVVRF3',
    product_title:
      'TurboTax Premier 2023 Tax Software, Federal & State Tax Return [Amazon Exclusive] [PC/Mac Download]',
    product_price: '$104.99',
    product_star_rating: '4.3',
    product_num_ratings: 5709,
    product_url: 'https://www.amazon.com/dp/B0CLBVVRF3',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/71ABLSmFI3L._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 32,
    asin: 'B0BH5MZ7VT',
    product_title:
      '[Old Version] TurboTax Deluxe 2022 Tax Software, Federal and State Tax Return, [Amazon Exclusive] [PC/MAC Download]',
    product_price: '$69.99',
    product_star_rating: '4.3',
    product_num_ratings: 10732,
    product_url: 'https://www.amazon.com/dp/B0BH5MZ7VT',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/71IgMkror-L._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 33,
    asin: 'B07Q4QZGFR',
    product_title:
      'Adobe Acrobat Professional DC | PDF converter | 12-month Subscription with auto-renewal, PC/Mac',
    product_price: '$239.88',
    product_star_rating: '4.2',
    product_num_ratings: 1035,
    product_url: 'https://www.amazon.com/dp/B07Q4QZGFR',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/51XI9kYWK8L._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 34,
    asin: 'B082DZBFP7',
    product_title:
      'Rosetta Stone Learn UNLIMITED Languages | Lifetime Access - Learn 24 Languages | PC/Mac/iOS/Android Online Code',
    product_price: '$189.00',
    product_star_rating: '4.3',
    product_num_ratings: 1445,
    product_url: 'https://www.amazon.com/dp/B082DZBFP7',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/51nheJ4PQAL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 35,
    asin: 'B0BZ2MBZK5',
    product_title:
      'McAfee Total Protection 2024 | 5 Devices | 15 Month Subscription | Cybersecurity software includes Antivirus, Secure VPN, Pas',
    product_price: '$24.99',
    product_star_rating: '4.4',
    product_num_ratings: 183,
    product_url: 'https://www.amazon.com/dp/B0BZ2MBZK5',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/61hgJGQy3BL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 36,
    asin: 'B0CJCWHXH2',
    product_title:
      'H&R Block Tax Software Deluxe + State 2023 with Refund Bonus Offer (Amazon Exclusive) (PC/MAC Download)',
    product_price: '$39.97',
    product_star_rating: '4.1',
    product_num_ratings: 3940,
    product_url: 'https://www.amazon.com/dp/B0CJCWHXH2',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/51WNth-N57L._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 37,
    asin: 'B092M5G1G7',
    product_title:
      'Mullvad VPN | 12 Months for 5 Devices | Protect Your Privacy with Easy-To-Use Security VPN Service',
    product_price: '$57.00',
    product_star_rating: '4.7',
    product_num_ratings: 710,
    product_url: 'https://www.amazon.com/dp/B092M5G1G7',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/31QJJ68ENgL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 38,
    asin: 'B092M55HJ2',
    product_title:
      'Mullvad VPN | 5 Devices for 6 Months | Protect Your Privacy with Easy-To-Use Security VPN Service',
    product_price: '$29.00',
    product_star_rating: '4.7',
    product_num_ratings: 710,
    product_url: 'https://www.amazon.com/dp/B092M55HJ2',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/61+MBtXYA1L._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 39,
    asin: 'B07DDL3N69',
    product_title:
      'Webroot Internet Security Complete | Antivirus Software 2024 | 5 Device | 1 Year Download for PC/Mac/Chromebook/Android/IOS +',
    product_price: '$31.99',
    product_star_rating: '4.6',
    product_num_ratings: 1752,
    product_url: 'https://www.amazon.com/dp/B07DDL3N69',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/61l3NZWVxwL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 40,
    asin: 'B07Q55XCC9',
    product_title:
      'Norton 360 Standard 2024, Antivirus software for 1 Device with Auto Renewal – Includes VPN, PC Cloud Backup & Dark Web Monito',
    product_price: '$19.99',
    product_star_rating: '3.9',
    product_num_ratings: 1018,
    product_url: 'https://www.amazon.com/dp/B07Q55XCC9',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/71QjMMdjlDL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 41,
    asin: 'B089WH9CFY',
    product_title:
      'Malwarebytes Premium | 1 Year, 5 Device | PC, Mac, Android [Online Code]',
    product_price: '$39.99',
    product_star_rating: '4.4',
    product_num_ratings: 260,
    product_url: 'https://www.amazon.com/dp/B089WH9CFY',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/51ZF6vJmpIL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 42,
    asin: 'B07QLYWQRQ',
    product_title:
      'Norton 360 Deluxe 2024, Antivirus software for 5 Devices with Auto Renewal - Includes VPN, PC Cloud Backup & Dark Web Monitor',
    product_price: '$29.58',
    product_star_rating: '4.3',
    product_num_ratings: 4270,
    product_url: 'https://www.amazon.com/dp/B07QLYWQRQ',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/71ANSYyAWvL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 43,
    asin: 'B0CLBPQX99',
    product_title:
      'TurboTax Business 2023 Tax Software, Federal Tax Return [PC Download]',
    product_price: '$179.99',
    product_star_rating: '4.1',
    product_num_ratings: 829,
    product_url: 'https://www.amazon.com/dp/B0CLBPQX99',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/71yyAB8-OPL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 44,
    asin: 'B07RS7XV5D',
    product_title:
      'Corel Easy CD & DVD Burning 2 | Disc Burner & Video Capture [PC Disc]',
    product_price: '$14.99',
    product_star_rating: '3.9',
    product_num_ratings: 1857,
    product_url: 'https://www.amazon.com/dp/B07RS7XV5D',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/71DjNLyzK7L._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 45,
    asin: 'B0C9GBLZQ1',
    product_title:
      'NordVPN Standard – 2-Year - VPN & Cybersecurity Software For 10 Devices – Block Malware, Malicious Links & Ads, Protect Perso',
    product_price: '$89.99',
    product_star_rating: '3.9',
    product_num_ratings: 79,
    product_url: 'https://www.amazon.com/dp/B0C9GBLZQ1',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/61LppCuU6tL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 46,
    asin: 'B0CM4F111Z',
    product_title:
      'Tech-Shop-pro install Key Included USB For Windows 11 Home Version 32/64 bit. Recover, Restore, Repair Boot USB, and Install ',
    product_price: '$65.00',
    product_star_rating: '3.9',
    product_num_ratings: 16,
    product_url: 'https://www.amazon.com/dp/B0CM4F111Z',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/71HHcF-XFtL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 47,
    asin: 'B084L8X5VV',
    product_title:
      'Malwarebytes | Amazon Exclusive | 18 Months, 2 Devices | PC, Mac, Android [Online Code]',
    product_price: '$29.99',
    product_star_rating: '4.5',
    product_num_ratings: 683,
    product_url: 'https://www.amazon.com/dp/B084L8X5VV',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/51WbVItYXfL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 48,
    asin: 'B0CJYL7JYV',
    product_title: 'TurboTax Deluxe 2023 [Disc]',
    product_price: '$38.33',
    product_star_rating: '4.3',
    product_num_ratings: 14212,
    product_url: 'https://www.amazon.com/dp/B0CJYL7JYV',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/71Eulvi6neL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 49,
    asin: 'B07TWN55VV',
    product_title:
      'Roxio Easy VHS to DVD 3 Plus VHS, Hi8, V8 Video to DVD or Digital Converter Amazon Exclusive 2 Bonus DVDs [Windows Disc]',
    product_price: '$39.99',
    product_star_rating: '3.7',
    product_num_ratings: 3586,
    product_url: 'https://www.amazon.com/dp/B07TWN55VV',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/71Vo5Zbv1oL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
  {
    rank: 50,
    asin: 'B0C5JX4CZ1',
    product_title:
      'Tech-Shop-pro With Key Compatible Windows 10 Profesional 64 Bit USB.Key Included Install To Factory Fresh, Recover, Repair an',
    product_price: '$70.00',
    product_star_rating: '3.9',
    product_num_ratings: 164,
    product_url: 'https://www.amazon.com/dp/B0C5JX4CZ1',
    product_photo:
      'https://images-na.ssl-images-amazon.com/images/I/71FoOtcipZL._AC_UL900_SR900,600_.jpg',
    rank_change_label: null,
  },
];

const productOffer = {
  status: 'OK',
  request_id: 'c7069ccb-e039-4ac0-a25a-556b1a6268ae',
  parameters: {asin: 'B09SM24S8C', country: 'US', limit: 100, page: 1},
  data: {
    asin: 'B09SM24S8C',
    product_title:
      'Samsung Galaxy A03s Cell Phone, AT&T GSM Unlocked Android Smartphone, 32GB, Long Lasting Battery, Expandable Storage, 3 Camera Lenses, Infinite Display - Black (Renewed)',
    product_price: '$74.00',
    product_original_price: null,
    currency: 'USD',
    country: 'US',
    product_star_rating: '3.9',
    product_num_ratings: 442,
    product_url: 'https://www.amazon.com/dp/B09SM24S8C',
    product_photo: 'https://m.media-amazon.com/images/I/41HG0PuuxAL.jpg',
    product_num_offers: 34,
    product_availability: 'Only 11 left in stock - order soon.',
    is_best_seller: false,
    is_amazon_choice: false,
    is_prime: false,
    climate_pledge_friendly: false,
    sales_volume: '2K+ bought in past month',
    about_product: [
      '6.5" 720 x 1600 (HD+) PLS TFT LCD Infinity-V Display, 5000mAh Battery, Fingerprint (side-mounted)',
      '64GB ROM, 4GB RAM, MediaTek MT6765 Helio P35 (12nm), Octa-core, PowerVR GE8320, Android 11, upgradable to Android 12, One UI 4.1 Core',
      'Rear Camera: 13MP, f/2.2, (macro) + 2MP, F2.4, (depth) + 2MP, F2.4, Front Camera: 5 MP, f/2.2, Bluetooth 5.0',
      '2G: 850/900/1800/1900MHz, 3G: 850/900/1700(AWS)/1900/2100, 4G LTE: B2(1900)/B4(AWS)/B5(850)/B12(700)/B14(700) - Single SIM',
      'American 4G LTE - Will work with Most GSM SIM cards in the U.S. like AT&T, T-Mobile, Etc. Will NOT work with CDMA Carriers Such as Verizon, Sprint, Boost',
    ],
    product_description:
      'This pre-owned or refurbished product has been professionally inspected and tested to work and look like new. How a product becomes part of Amazon Renewed, your destination for pre-owned, refurbished products: A customer buys a new product and returns it or trades it in for a newer or different model. That product is inspected and tested to work and look like new by Amazon-qualified suppliers. Then, the product is sold as an Amazon Renewed product on Amazon. If not satisfied with the purchase, renewed products are eligible for replacement or refund under the Amazon Renewed Guarantee.',
    product_information: {
      'Product Dimensions': '6.46 x 2.99 x 0.36 inches',
      'Item Weight': '7 ounces',
      ASIN: 'B09SM24S8C',
      'Item model number': 'SM-A037W',
      Batteries: '1 Lithium Polymer batteries required. (included)',
      'Best Sellers Rank':
        '#33 in Amazon Renewed (See Top 100 in Amazon Renewed)   #19 in Renewed Smartphones',
      OS: 'Android',
      RAM: '2 GB',
      'Wireless communication technologies': 'Cellular',
      'Connectivity technologies': 'Bluetooth, Wi-Fi, USB',
      'Other display features': 'Wireless',
      'Human Interface Input': 'Touchscreen',
      'Scanner Resolution': '720 x 1600',
      'Other camera features': 'Rear, Front',
      'Form Factor': 'Slate',
      Color: 'Black',
      'Battery Power Rating': '5000 Milliamp Hours',
      'Whats in the box': 'Hybrid SIM Tray',
      Manufacturer: 'Samsung Electronics',
      'Date First Available': 'February 16, 2022',
      'Memory Storage Capacity': '32 GB',
      'Standing screen display size': '6.5 Inches',
      'Ram Memory Installed Size': '3 GB',
      'Battery Capacity': '5000 Milliamp Hours',
      Weight: '6.98 Ounces',
      'Charging Time': '3.63 Hours',
    },
    rating_distribution: {1: '16', 2: '5', 3: '8', 4: '13', 5: '58'},
    product_photos: [
      'https://m.media-amazon.com/images/I/41HG0PuuxAL.jpg',
      'https://m.media-amazon.com/images/I/41iat8UMBKL.jpg',
      'https://m.media-amazon.com/images/I/21CATArfRqL.jpg',
      'https://m.media-amazon.com/images/I/41vhp0zLcQL.jpg',
      'https://m.media-amazon.com/images/I/21bRFtI4+3L.jpg',
      'https://m.media-amazon.com/images/I/41HG0PuuxAL.jpg',
      'https://m.media-amazon.com/images/I/41HG0PuuxAL.jpg',
    ],
    product_details: {
      Brand: 'SAMSUNG',
      'Operating System': 'Android',
      'Ram Memory Installed Size': '3 GB',
      'CPU Model': 'Snapdragon',
      'Memory Storage Capacity': '32 GB',
      'Screen Size': '6.5 Inches',
      Resolution: '720 x 1600',
      'Model Name': 'Galaxy A03s',
      'Wireless Carrier': 'Unlocked for All Carriers',
      'Cellular Technology': 'GSM',
    },
    customers_say:
      "Customers like the ease of use and camera of the cellular phone. They mention that it's simple and easy to set up. They are also satisfied with the condition. However, some customers reported that the phone was not unlocked and that they had to pay extra for it to work. Opinions are mixed on performance, value, and battery life.",
    category_path: [
      {
        id: '2335752011',
        name: 'Cell Phones & Accessories',
        link: 'https://www.amazon.com/cell-phones-service-plans-accessories/b/ref=dp_bc_aui_C_1?ie=UTF8&node=2335752011',
      },
      {
        id: '7072561011',
        name: 'Cell Phones',
        link: 'https://www.amazon.com/cell-phone-devices/b/ref=dp_bc_aui_C_2?ie=UTF8&node=7072561011',
      },
    ],
    product_variations: {
      color: [
        {
          asin: 'B09SM24S8C',
          value: 'Black',
          photo: 'https://m.media-amazon.com/images/I/41HG0PuuxAL.jpg',
          is_available: true,
        },
        {
          asin: 'B09VXCQGNP',
          value: 'Blue',
          photo: 'https://m.media-amazon.com/images/I/31-knlOilOL.jpg',
          is_available: true,
        },
      ],
    },
    product_offers: [
      {
        product_price: '$74.00',
        product_condition: 'Refurbished - Excellent',
        ships_from: 'Joygoods CR',
        seller: 'Joygoods CR',
        seller_id: 'AZL8GRY85QC1Y',
        seller_link:
          'https://www.amazon.com/gp/aag/main?ie=UTF8&seller=AZL8GRY85QC1Y&isAmazonFulfilled=0&asin=B09SM24S8C&ref_=olp_merch_name_0',
        seller_star_rating: '4.5',
        seller_star_rating_info:
          '(1350 ratings)\n83% positive over last 12 months',
        currency: 'USD',
        delivery_price: 'FREE',
        delivery_time: 'July 24 - 25',
      },
      {
        product_price: '$61.00',
        product_condition: 'Refurbished - Acceptable',
        product_condition_details:
          'Accetable C Grade description Electronic World 201 "Acceptable C Grade" condition for refurbished products means that the item has medium to heavy scratches that are visible when holding the device 12 inches away and will be felt to the touch. The screen, bezel or back can also have medium to heavy scratch. Can also have some small dings or chips. The product will also be fully functional and have a battery with more than 80% of its original capacity. Amazon Renewed products come with generic or original equipment manufacturer accessories and packaging, and are eligible for a 90-day replacement or refund guarantee.',
        ships_from: 'NJ-1',
        seller: 'NJ-1',
        seller_id: 'A3U6SKWUNLDOL',
        seller_link:
          'https://www.amazon.com/gp/aag/main?ie=UTF8&seller=A3U6SKWUNLDOL&isAmazonFulfilled=0&asin=B09SM24S8C&ref_=olp_merch_name_1',
        seller_star_rating: '4',
        seller_star_rating_info:
          '(40 ratings)\n71% positive over last 12 months',
        currency: 'USD',
        delivery_price: 'FREE',
        delivery_time: 'July 25 - 26',
      },
      {
        product_price: '$61.56',
        product_condition: 'Refurbished - Good',
        ships_from: 'Amazon.com',
        seller: 'Techrific Deals',
        seller_id: 'AXDQETSB4MUQT',
        seller_link:
          'https://www.amazon.com/gp/aag/main?ie=UTF8&seller=AXDQETSB4MUQT&isAmazonFulfilled=1&asin=B09SM24S8C&ref_=olp_merch_name_2',
        seller_star_rating: '4.5',
        seller_star_rating_info:
          '(332 ratings)\n90% positive over last 12 months',
        currency: 'USD',
        delivery_price: 'FREE',
        delivery_time: 'Sunday, July 28',
      },
      {
        product_price: '$64.50',
        product_condition: 'Refurbished - Acceptable',
        ships_from: 'Amazon.com',
        seller: 'MartMania',
        seller_id: 'AFHJ52XUEKT6G',
        seller_link:
          'https://www.amazon.com/gp/aag/main?ie=UTF8&seller=AFHJ52XUEKT6G&isAmazonFulfilled=1&asin=B09SM24S8C&ref_=olp_merch_name_3',
        seller_star_rating: '5',
        seller_star_rating_info: '(8 ratings)\n100% positive over lifetime',
        currency: 'USD',
        delivery_price: 'FREE',
        delivery_time: 'August 7 - 17',
      },
      {
        product_price: '$65.93',
        product_condition: 'Refurbished - Acceptable',
        product_condition_details:
          'GRADE B 8/10. Few scratches or dings. Comes with cable(generic). 60 Days Warranty!',
        ships_from: 'TeeEra Shop',
        seller: 'TeeEra Shop',
        seller_id: 'A1AU4T92PDD75U',
        seller_link:
          'https://www.amazon.com/gp/aag/main?ie=UTF8&seller=A1AU4T92PDD75U&isAmazonFulfilled=0&asin=B09SM24S8C&ref_=olp_merch_name_4',
        seller_star_rating: '4',
        seller_star_rating_info:
          '(352 ratings)\n77% positive over last 12 months',
        currency: 'USD',
        delivery_price: 'FREE',
        delivery_time: 'July 29 - 31',
      },
      {
        product_price: '$65.93',
        product_condition: 'Refurbished - Acceptable',
        product_condition_details:
          'GRADE B 8/10. Few scratches or dings. Comes with cable(generic). 60 Days Warranty!',
        ships_from: 'Haverly Store',
        seller: 'Haverly Store',
        seller_id: 'A65CUHLW5BI0P',
        seller_link:
          'https://www.amazon.com/gp/aag/main?ie=UTF8&seller=A65CUHLW5BI0P&isAmazonFulfilled=0&asin=B09SM24S8C&ref_=olp_merch_name_5',
        seller_star_rating: '4.5',
        seller_star_rating_info:
          '(832 ratings)\n86% positive over last 12 months',
        currency: 'USD',
        delivery_price: 'FREE',
        delivery_time: 'July 29 - 31',
      },
      {
        product_price: '$65.93',
        product_condition: 'Refurbished - Acceptable',
        product_condition_details:
          'GRADE B 8/10. Few scratches or dings. Comes with cable(generic). 60 Days Warranty!',
        ships_from: 'GM DEALS',
        seller: 'GM DEALS',
        seller_id: 'AWZ5ROU8H8A6M',
        seller_link:
          'https://www.amazon.com/gp/aag/main?ie=UTF8&seller=AWZ5ROU8H8A6M&isAmazonFulfilled=0&asin=B09SM24S8C&ref_=olp_merch_name_6',
        seller_star_rating: '4',
        seller_star_rating_info:
          '(2583 ratings)\n82% positive over last 12 months',
        currency: 'USD',
        delivery_price: 'FREE',
        delivery_time: 'July 29 - 31',
      },
      {
        product_price: '$69.72',
        product_condition: 'Refurbished - Excellent',
        ships_from: 'Amazon.com',
        seller: 'Wireless Experts, Inc. (R-CA)',
        seller_id: 'A2ET27M2CTQ9FF',
        seller_link:
          'https://www.amazon.com/gp/aag/main?ie=UTF8&seller=A2ET27M2CTQ9FF&isAmazonFulfilled=1&asin=B09SM24S8C&ref_=olp_merch_name_7',
        seller_star_rating: '4.5',
        seller_star_rating_info: '(27 ratings)\n85% positive over lifetime',
        currency: 'USD',
        delivery_price: 'FREE',
        delivery_time: 'Sunday, July 28',
      },
      {
        product_price: '$70.77',
        product_condition: 'Refurbished - Excellent',
        ships_from: 'perfectly professional',
        seller: 'perfectly professional',
        seller_id: 'A1HFTVM9QJRCL1',
        seller_link:
          'https://www.amazon.com/gp/aag/main?ie=UTF8&seller=A1HFTVM9QJRCL1&isAmazonFulfilled=0&asin=B09SM24S8C&ref_=olp_merch_name_8',
        seller_star_rating: '4.5',
        seller_star_rating_info:
          '(1244 ratings)\n82% positive over last 12 months',
        currency: 'USD',
        delivery_price: 'FREE',
        delivery_time: 'Tuesday, July 30',
      },
      {
        product_price: '$70.98',
        product_condition: 'Refurbished - Excellent',
        ships_from: 'CELLULAR GALLERY INC',
        seller: 'CELLULAR GALLERY INC',
        seller_id: 'A1GCUH9Z3V4Y5T',
        seller_link:
          'https://www.amazon.com/gp/aag/main?ie=UTF8&seller=A1GCUH9Z3V4Y5T&isAmazonFulfilled=0&asin=B09SM24S8C&ref_=olp_merch_name_9',
        seller_star_rating: '4',
        seller_star_rating_info:
          '(4977 ratings)\n70% positive over last 12 months',
        currency: 'USD',
        delivery_price: 'FREE',
        delivery_time: 'July 31 - August 2',
      },
      {
        product_price: '$71.10',
        product_condition: 'Refurbished - Excellent',
        ships_from: 'Amazon.com',
        seller: 'Techrific Deals',
        seller_id: 'AXDQETSB4MUQT',
        seller_link:
          'https://www.amazon.com/gp/aag/main?ie=UTF8&seller=AXDQETSB4MUQT&isAmazonFulfilled=1&asin=B09SM24S8C&ref_=olp_merch_name_10',
        seller_star_rating: '4.5',
        seller_star_rating_info:
          '(332 ratings)\n90% positive over last 12 months',
        currency: 'USD',
        delivery_price: 'FREE',
        delivery_time: 'Sunday, July 28',
      },
    ],
  },
};

export const getProductDataApi = async () => {
  const options = {
    method: 'GET',
    url: 'https://real-time-amazon-data.p.rapidapi.com/search',
    params: {
      query: 'Phone',
      page: '1',
      country: 'IN',
      sort_by: 'RELEVANCE',
      category_id: 'Electronics',
      product_condition: 'ALL',
    },
    headers: {
      'x-rapidapi-key': '66ca65bb22msh3d93dafc2ebf7dbp13cc14jsn54a6c8df0d9',
      'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
    },
  };
  try {
    // const response = await axios.request(options);
    // return response.data;

    return product;
  } catch (error) {
    console.error(error);
  }
};

export const getProductReviewApi = async id => {
  const options = {
    method: 'GET',
    url: 'https://real-time-amazon-data.p.rapidapi.com/product-reviews',
    params: {
      asin: id,
      country: 'IN',
      sort_by: 'TOP_REVIEWS',
      star_rating: 'ALL',
      verified_purchases_only: 'false',
      images_or_videos_only: 'false',
      current_format_only: 'false',
      page: '1',
    },
    headers: {
      'x-rapidapi-key': '66ca65bb22msh3d93dafc2ebf7dbp13cc14jsn54a6c8df0d9b',
      'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
    },
  };

  try {
    // const response = await axios.request(options);
    // return response.data
    return review;
  } catch (error) {
    console.error(error);
  }
};

export const getProductDealsApi = async () => {
  const options = {
    method: 'GET',
    url: 'https://real-time-amazon-data.p.rapidapi.com/deals-v2',
    params: {
      country: 'US',
      min_product_star_rating: 'ALL',
      price_range: 'ALL',
      discount_range: 'ALL',
    },
    headers: {
      'x-rapidapi-key': '66ca65bb22msh3d93dafc2ebf7dbp13cc14jsn54a6c8df0d9b',
      'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
    },
  };

  try {
    // const response = await axios.request(options);
    return deals;
  } catch (error) {
    console.error(error);
  }
};

export const getBestSellerProductApi = async () => {
  const options = {
    method: 'GET',
    url: 'https://real-time-amazon-data.p.rapidapi.com/best-sellers',
    params: {
      category: 'software',
      type: 'BEST_SELLERS',
      page: '1',
      country: 'US',
    },
    headers: {
      'x-rapidapi-key': '66ca65bb22msh3d93dafc2ebf7dbp13cc14jsn54a6c8df0d9b',
      'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
    },
  };

  try {
    // const response = await axios.request(options);
    return bestSeller;
  } catch (error) {
    console.error(error);
  }
};

export const getSingleProductOffer = async (id="B09SM24S8C") => {
  const options = {
    method: 'GET',
    url: 'https://real-time-amazon-data.p.rapidapi.com/product-offers',
    params: {
      asin: id,
      country: 'US',
      limit: '2296',
      page: '1',
    },
    headers: {
      'x-rapidapi-key': '66ca65bb22msh3d93dafc2ebf7dbp13cc14jsn54a6c8df0d9b',
      'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
    },
  };

  try {
    // const response = await axios.request(options);
      return productOffer;
  } catch (error) {
    console.error(error);
  }
};
