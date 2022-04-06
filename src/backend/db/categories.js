import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    img: "https://rukminim1.flixcart.com/image/612/612/kufuikw0/book/p/3/d/man-s-search-for-meaning-original-imag7kerxrpweqj9.jpeg?q=70",
    name: "Man's Search For Meaning",
    description:
      "Frankl's Man's Search for Meaning provides a vivid account of an individual's experience as a prisoner in a Nazi concentration camp.",
    categoryName: "Non Fiction",
  },
  {
    _id: uuid(),
    img: "https://rukminim1.flixcart.com/image/612/612/jpu324w0/book/0/9/0/believe-in-yourself-original-imafbzz2h7yfg5zz.jpeg?q=70",
    name: "Believe In Yourself",
    description:
      "Dr. Murphy stresses about having faith in ones abilities, believing in the inner self and in having the courage to chase your dream.",
    categoryName: "Self Help",
  },
  {
    _id: uuid(),
    img: "https://rukminim1.flixcart.com/image/612/612/kjbr8280-0/book/z/r/9/learning-how-to-fly-original-imafyx6zuhvfhv94.jpeg?q=70",
    name: "Learning How To Fly",
    description:
      "Through stories from his own life, those of his teachers and mentors as well as stories of some of the greatest men and women of the world and the latest developments.",
    categoryName: "Fiction",
  },
];
