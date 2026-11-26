export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  alt: string;
  label?: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "black-crochet-leather-bag",
    name: "Black Crochet Leather Bag",
    price: 2500,
    category: "Bags",
    image: "/images/black crochet brown leather bag.jpg",
    alt: "Black crochet bag with brown leather details",
    label: "BESTSELLER",
    description:
      "A hand-finished crochet bag with warm leather details for everyday styling.",
  },
  {
    id: "blue-crochet-bag",
    name: "Blue Crochet Bag",
    price: 2500,
    category: "Bags",
    image: "/images/Blue crochet bag.jpg",
    alt: "Blue crochet bag",
    label: "NEW",
    description:
      "A bright crochet carryall that brings colour and texture to your daily edit.",
  },
  {
    id: "black-floral-crochet-sandals",
    name: "Black Floral Crochet Sandals",
    price: 2000,
    category: "Sandals",
    image: "/images/Black Sandals floral crochet design.JPG",
    alt: "Black sandals with floral crochet design",
    label: "NEW",
    description:
      "Lightweight crochet sandals finished with a floral detail for easy warm-weather dressing.",
  },
  {
    id: "black-crochet-sandals",
    name: "Black Crochet Sandals",
    price: 2000,
    category: "Sandals",
    image: "/images/product black crochet sandles .jpg",
    alt: "Black crochet sandals",
    description:
      "An easy black sandal with a tactile crochet finish, made for everyday movement.",
  },
  {
    id: "blue-crochet-sandals",
    name: "Blue Crochet Sandals",
    price: 2000,
    category: "Sandals",
    image: "/images/product blue crochet sandles .jpg",
    alt: "Blue crochet sandals",
    label: "NEW",
    description:
      "A fresh blue crochet sandal designed to add a considered pop of colour.",
  },
  {
    id: "orange-crochet-sandals",
    name: "Orange Crochet Sandals",
    price: 2000,
    category: "Sandals",
    image: "/images/product orange crochet sandles .JPG",
    alt: "Orange crochet sandals",
    description:
      "A vivid crochet sandal with a relaxed shape for sunny days and slow weekends.",
  },
  {
    id: "purple-crochet-sling-bag",
    name: "Purple Crochet Sling Bag",
    price: 2500,
    category: "Bags",
    image: "/images/product purple sling bag1.JPG",
    alt: "Purple crochet sling bag",
    label: "NEW",
    description:
      "A compact crochet sling bag made to carry the essentials with personality.",
  },
  {
    id: "brown-crochet-sling-bag",
    name: "Brown Crochet Sling Bag",
    price: 2500,
    category: "Bags",
    image: "/images/product brown sling bag 1.JPG",
    alt: "Brown crochet sling bag",
    description:
      "A versatile brown crochet sling bag with an easy silhouette for daily wear.",
  },
  {
    id: "white-black-crochet-bag",
    name: "White & Black Crochet Bag",
    price: 2500,
    category: "Bags",
    image: "/images/white crochet black bag.JPG",
    alt: "White and black crochet bag",
    label: "NEW",
    description:
      "A graphic two-tone crochet bag that gives simple outfits a confident finish.",
  },
  {
    id: "black-grey-crochet-bag",
    name: "Black & Grey Crochet Bag",
    price: 2500,
    category: "Bags",
    image: "/images/Black crochet Grey bag.jpg",
    alt: "Black and grey crochet bag",
    description:
      "A tonal crochet bag with a soft structure and an understated everyday palette.",
  },
];

export const heroImages = [
  { src: "/images/Culture7.png", alt: "Hook & Knots fashion campaign" },
  { src: "/images/culture2.png", alt: "Hook & Knots campaign portrait" },
  { src: "/images/culture3.png", alt: "Hook & Knots campaign styling" },
  { src: "/images/culture5.png", alt: "Hook & Knots campaign styling" },
  { src: "/images/culture8.png", alt: "Hook & Knots campaign portrait" },
];

export const galleryBags = [
  {
    src: "/images/black crochet brown leather bag 2.JPG",
    alt: "Close detail of black crochet leather bag",
    caption: "Black Crochet Leather Bag",
    num: "01",
  },
  {
    src: "/images/blue crochet bag 2.JPG",
    alt: "Close detail of blue crochet bag",
    caption: "Blue Crochet Bag",
    num: "02",
  },
  {
    src: "/images/Black crochet Grey bag.jpg",
    alt: "Black and grey crochet bag",
    caption: "Black & Grey Crochet Bag",
    num: "03",
  },
  {
    src: "/images/Blue crochet bag.jpg",
    alt: "Blue crochet bag",
    caption: "Blue Crochet Bag",
    num: "04",
  },
  {
    src: "/images/product brown sling bag 1.JPG",
    alt: "Brown crochet sling bag",
    caption: "Brown Crochet Sling Bag",
    num: "05",
  },
  {
    src: "/images/product brown sling bag2.JPG",
    alt: "Detail of brown crochet sling bag",
    caption: "Brown Crochet Sling Bag",
    num: "06",
  },
  {
    src: "/images/product purple sling bag1.JPG",
    alt: "Purple crochet sling bag",
    caption: "Purple Crochet Sling Bag",
    num: "07",
  },
  {
    src: "/images/product purple sling bag2.JPG",
    alt: "Detail of purple crochet sling bag",
    caption: "Purple Crochet Sling Bag",
    num: "08",
  },
  {
    src: "/images/white crochet black bag.JPG",
    alt: "White and black crochet bag",
    caption: "White & Black Crochet Bag",
    num: "09",
  },
  {
    src: "/images/black crochet brown leather bag.jpg",
    alt: "Black crochet bag with brown leather details",
    caption: "Black Crochet Leather Bag",
    num: "10",
  },
];

export const gallerySandals = [
  {
    src: "/images/Black Sandals floral crochet design.JPG",
    alt: "Black floral crochet sandals",
    caption: "Black Floral Crochet Sandals",
    num: "01",
  },
  {
    src: "/images/product black crochet sandles .jpg",
    alt: "Black crochet sandals",
    caption: "Black Crochet Sandals",
    num: "02",
  },
  {
    src: "/images/product blue crochet sandles .jpg",
    alt: "Blue crochet sandals",
    caption: "Blue Crochet Sandals",
    num: "03",
  },
  {
    src: "/images/product orange crochet sandles .JPG",
    alt: "Orange crochet sandals",
    caption: "Orange Crochet Sandals",
    num: "04",
  },
];

export const galleryCampaign = [
  { src: "/images/culture4.png", alt: "Hook & Knots campaign" },
  { src: "/images/culture5.png", alt: "Hook & Knots campaign styling" },
  { src: "/images/culture6.png", alt: "Hook & Knots campaign" },
  { src: "/images/Culture7.png", alt: "Hook & Knots fashion campaign" },
  { src: "/images/culture8.png", alt: "Hook & Knots campaign portrait" },
  { src: "/images/culture9.png", alt: "Hook & Knots campaign portrait" },
];

export const courses = [
  {
    id: "crochet",
    type: "FOUNDATION COURSE",
    name: "Crochet",
    description:
      "Learn the essential stitches, tension, shaping, and finishing techniques for creating your first wearable or accessory.",
    duration: "4 weeks",
    level: "Beginner",
    image: "/images/Blue crochet bag.jpg",
    num: "01",
  },
  {
    id: "macrame",
    type: "FOUNDATION COURSE",
    name: "Macrame",
    description:
      "Explore knot families, pattern building, and structure while making a relaxed, tactile piece for your space.",
    duration: "3 weeks",
    level: "Beginner",
    image: "/images/product brown sling bag2.JPG",
    num: "02",
  },
  {
    id: "needlepoint",
    type: "DETAIL COURSE",
    name: "Needlepoint",
    description:
      "Work colour, rhythm, and composition into a small stitched artwork using guided canvas and thread techniques.",
    duration: "4 weeks",
    level: "Beginner+",
    image: "/images/white crochet black bag.JPG",
    num: "03",
  },
  {
    id: "beadwork",
    type: "SIGNATURE COURSE",
    name: "Beadwork",
    description:
      "Learn to select, thread, and compose beads into expressive details that can transform an everyday accessory.",
    duration: "3 weeks",
    level: "All levels",
    image: "/images/product purple sling bag2.JPG",
    num: "04",
  },
];

export const formatPrice = (price: number) =>
  `KSh ${price.toLocaleString("en-KE")}`;
