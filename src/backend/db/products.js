import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products =[ 
  {
    "_id": "df2da037-88d3-4757-9167-6e79139a0767",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41y2KJ+kDLL._SY344_BO1,204,203,200_.jpg",
    "title": "You Can WIN",
    "author": "Shiv Khera",
    "originalPrice": 1399,
    "isBestSeller": true,
    "price": 5000,
    "categoryName": "non-fiction",
    "rating": 4.7,
    "id": "1"
  },
  {
    "_id": "bff3ed65-2728-4422-a88f-91839e11662a",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41y2KJ+kDLL._SY344_BO1,204,203,200_.jpg",
    "title": "A Touch of Eternity",
    "author": "Datta Durjoy",
    "originalPrice": 199,
    "isBestSeller": true,
    "price": 199,
    "categoryName": "romance",
    "rating": 4,
    "id": "2"
  },
  {
    "_id": "6159aac6-2375-4d99-b53f-de7af5cd0823",
    "img": "https://m.media-amazon.com/images/I/81b1PP4RK1L._AC_UY327_FMwebp_QL65_.jpg",
    "title": "That Night: Four Friends. ",
    "author": "Nidhi Upadhyay ",
    "originalPrice": 250,
    "isBestSeller": false,
    "price": 181,
    "categoryName": "horror",
    "rating": 4.3,
    "id": "3"
  },
  {
    "_id": "dafb0bc2-4466-43ee-852d-b413f7323172",
    "title": "You are Winner",
    "img": "https://images-eu.ssl-images-amazon.com/images/I/517sWS8zu0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    "author": "Junaid Qureshi",
    "originalPrice": 1399,
    "isBestSeller": true,
    "price": 3000,
    "categoryName": "horror",
    "rating": 4,
    "id": "4"
  },
  {
    "_id": "a3a1dfb2-0122-46d1-bbab-6b970075b753",
    "title": "Think and Grow Rich",
    "img": "https://m.media-amazon.com/images/I/61b5aPmEhzL._AC_UY327_FMwebp_QL65_.jpg",
    "author": "Shiv Khera",
    "originalPrice": 1399,
    "isBestSeller": true,
    "price": 1000,
    "categoryName": "fiction",
    "rating": 3.6,
    "id": "5"
  },
  {
    "_id": "e545fa2f-8882-4814-8fb9-6d9940c743a3",
    "img": "https://rukminim1.flixcart.com/image/612/612/kwxv98w0/book/l/z/y/do-epic-shit-original-imag9gcfcwfvwtep.jpeg?q=70",
    "title": "Do Epic Shit",
    "author": "Ankur Warikoo",
    "price": 1019,
    "originalPrice": 1399,
    "isBestSeller": true,
    "categoryName": "Self Help",
    "rating": 4.6,
    "id": "6"
  },
  {
    "_id": "e0288b0c-0158-47c3-b11a-c681a4cbfab5",
    "img": "https://rukminim1.flixcart.com/image/612/612/jpu324w0/book/0/9/0/believe-in-yourself-original-imafbzz2h7yfg5zz.jpeg?q=70",
    "title": "Believe In Yourself",
    "author": "Joseph",
    "price": 5,
    "originalPrice": 1200,
    "isBestSeller": false,
    "categoryName": "Self Help",
    "rating": 4,
    "id": "7"
  },
  {
    "_id": "095ed857-f4c8-4472-addc-abd2ff076a1a",
    "img": "https://rukminim1.flixcart.com/image/612/612/kokdci80/regionalbooks/t/x/c/zero-to-one-original-imag2zzngtfasecu.jpeg?q=70",
    "title": "Zero To One",
    "author": "Peter Thiel",
    "price": 50,
    "originalPrice": 500,
    "isBestSeller": false,
    "categoryName": "fiction",
    "rating": 2,
    "id": "8"
  },
  {
    "_id": "1f3716e9-6dab-4e3a-ad06-cee798b0a3d9",
    "img": "https://d3i5mgdwi2ze58.cloudfront.net/hwi2qqngyicqz7s7ps4x4k1ei14k",
    "title": "Atomic Habits",
    "author": "James Clear",
    "price": 390,
    "originalPrice": 790,
    "isBestSeller": true,
    "categoryName": "Self Help",
    "rating": 4.8,
    "id": "9"
  },
  {
    "_id": "fe71e740-5495-494e-9249-e39b30cb7eae",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTvrBNWlYmmsa_2M3BaJdurD9lve0SdNLAIA&usqp=CAU",
    "title": "IKIGAI",
    "author": "I dont Know",
    "price": 600,
    "originalPrice": 1500,
    "isBestSeller": false,
    "categoryName": "non-fiction",
    "rating": 4,
    "id": "10"
  },
  {
    "_id": "d2154812-e254-4c76-b02f-2ebfe2ecf713",
    "img": "https://rukminim1.flixcart.com/image/612/612/kgwld3k0/book/1/9/4/rich-dad-poor-dad-original-imafxf885pytvycy.jpeg?q=70",
    "title": "Rich Dad Poor Dad",
    "author": "Robert Kiyoski",
    "price": 350,
    "originalPrice": 500,
    "isBestSeller": false,
    "categoryName": "non-fiction",
    "rating": 2,
    "id": "11"
  },
  {
    "_id": "c73a967f-e9cb-42f8-a990-e1d715f51dbc",
    "img": "https://rukminim1.flixcart.com/image/612/612/kirr24w0-0/book/k/k/g/the-monk-who-sold-his-ferrari-original-imafyhgacv9jrgv7.jpeg?q=70",
    "title": "Monk Who Sold His Ferrari",
    "author": "Robin Sharma",
    "price": 119,
    "originalPrice": 249,
    "isBestSeller": false,
    "categoryName": "non-fiction",
    "rating": 3,
    "id": "12"
  },
  {
    "_id": "b234e9a8-c2c5-42d7-b4f3-aa1336b8814a",
    "img": "https://rukminim1.flixcart.com/image/612/612/ki96c280-0/book/3/p/n/one-indian-girl-original-imafy2zrymfbtygz.jpeg?q=70",
    "title": "One Indian Girl",
    "author": "Chetan Bhagat",
    "price": 157,
    "originalPrice": 195,
    "isBestSeller": false,
    "categoryName": "fiction",
    "rating": 3,
    "id": "13"
  },
  {
    "_id": "e0e2c841-dec8-4121-a11b-8876bffaa7ae",
    "img": "https://rukminim1.flixcart.com/image/612/612/kjbr8280-0/book/z/r/9/learning-how-to-fly-original-imafyx6zuhvfhv94.jpeg?q=70",
    "title": "Learning How To Fly",
    "author": "A.P.J Abdul Kalam",
    "price": 163,
    "originalPrice": 205,
    "isBestSeller": false,
    "categoryName": "fiction",
    "rating": 2.5,
    "id": "14"
  },
  {
    "_id": "c54fa961-3d1b-4830-918b-32f21cf3f430",
    "img": "https://rukminim1.flixcart.com/image/612/612/kwpam4w0/book/r/a/r/-original-imag9bv6bzstsjgk.jpeg?q=70",
    "title": "400 Days",
    "author": "Chetan Bhagat",
    "price": 699,
    "originalPrice": 999,
    "isBestSeller": false,
    "categoryName": "Self Help",
    "rating": 4,
    "id": "15"
  },
  {
    "_id": "45cbb6e7-95b8-4cdd-98e7-31034418b552",
    "img": "https://rukminim1.flixcart.com/image/612/612/khxqt8w0-0/book/x/o/v/attitude-is-everything-change-your-attitude-change-your-life-original-imafxtvesfbk8rje.jpeg?q=70",
    "title": "Attitude Is Everything",
    "author": "Keller Jeff",
    "price": 399,
    "originalPrice": 699,
    "isBestSeller": false,
    "categoryName": "Self Help",
    "rating": 3.5,
    "id": "16"
  },
  {
    "_id": "42c9760c-ecad-481f-a1aa-d1e684dac46d",
    "img": "https://rukminim1.flixcart.com/image/612/612/kufuikw0/book/p/3/d/man-s-search-for-meaning-original-imag7kerxrpweqj9.jpeg?q=70",
    "title": "Man's Search For Meaning",
    "author": "Franky Viktor",
    "price": 243,
    "originalPrice": 349,
    "isBestSeller": false,
    "categoryName": "non-fiction",
    "rating": 1,
    "id": "17"
  }
]