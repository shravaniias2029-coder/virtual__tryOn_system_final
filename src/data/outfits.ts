// ─── Central outfit catalog ───────────────────────────────────────────────────
// All outfit images use Unsplash fashion photos (no API key needed — direct URLs)
import model_1 from "../assets/models/model_1.png";
import model_2 from "../assets/models/model_2.png";
import model_3 from "../assets/models/model_3.png";
import model_4 from "../assets/models/model_4.png";

import garment_5 from "../assets/outfits/garment_5.png";
import garment_7 from "../assets/outfits/garment_7.png";
import garment_8 from "../assets/outfits/garment_8.png";
import garment_13 from "../assets/outfits/garment_13.png";
import garment_14 from "../assets/outfits/garment_14.png";
import garment_15 from "../assets/outfits/garment_15.png";
import garment_17 from "../assets/outfits/garment_17.png";
import garment_23 from "../assets/outfits/garment_23.png";
import garment_24 from "../assets/outfits/garment_24.png";
import garment_21 from "../assets/outfits/garment_21.png";
import garment_25 from "../assets/outfits/garment_25.png";
import garment_26 from "../assets/outfits/garment_26.png";
import garment_27 from "../assets/outfits/garment_27.png";
import garment_28 from "../assets/outfits/garment_28.png";
import garment_29 from "../assets/outfits/garment_29.png";
import garment_30 from "../assets/outfits/garment_30.png";

export const SAMPLE_MODELS = [
  { id: 1, img: model_1, label: "Sample 1" },
  { id: 2, img: model_2, label: "Sample 2" },
  { id: 3, img: model_3, label: "Sample 3" },
  { id: 4, img: model_4, label: "Sample 4" },
];
export interface Outfit {
  id: number;
  name: string;
  brand: string;
  price: string;
  category: "Dresses" | "Tops" | "Bottoms" | "Outerwear" | "Formal" | "Casual" | "Streetwear" | "Athleisure";
  color: string;
  colorName: string;
  tags: string[];
  rating: number;
  reviews: number;
  img: string;
  liked?: boolean;
  isNew?: boolean;
  isTrending?: boolean;
}

export const OUTFITS: Outfit[] = [
  // {
  //   id: 1,
  //   name: "Floral Midi Sundress",
  //   brand: "Zara",
  //   price: "₹2,499",
  //   category: "Dresses",
  //   color: "#ec4899",
  //   colorName: "Rose Pink",
  //   tags: ["summer", "floral", "casual"],
  //   rating: 4.8,
  //   reviews: 312,
  //   img: "C:\\Users\\shrav\\OneDrive\\Documents\\TryOnX---Virtual-TryOn-System\\src\\assets\\outfits\\garment_14.png",
  //   liked: false,
  //   isTrending: true,
  // },
  {
  id: 1,
  name: "Casual T-Shirt",
  brand: "Local Brand",
  price: "₹799",
  category: "Tops",
  color: "#000000",
  colorName: "Black",
  tags: ["tshirt", "casual"],
  rating: 4.5,
  reviews: 120,
  img: garment_26,   // ✅ correct
},

{
    id: 2,
    name: "Wester Top",
    brand: "Adidas",
    price: "₹899",
    category: "Tops",
    color: "#fff",
    colorName: "Maron red",
    tags: ["tshirt"],
    rating: 4.6,
    reviews: 90,
    img: garment_15,
  },
  {
    id: 3,
    name: "Velvet Evening Gown",
    brand: "Mango",
    price: "₹5,999",
    category: "Formal",
    color: "#581c87",
    colorName: "Deep Purple",
    tags: ["evening", "luxury", "formal"],
    rating: 4.9,
    reviews: 97,
    img: garment_17 ,
    liked: false,
    isTrending: true,
  },
  {
    id: 4,
    name: "Street Style Hoodie Set",
    brand: "Nike",
    price: "₹3,299",
    category: "Streetwear",
    color: "#1e1e1e",
    colorName: "Jet Black",
    tags: ["street", "casual", "oversized"],
    rating: 4.7,
    reviews: 445,
    img: garment_8,
    liked: false,
  },
  {
    id: 5,
    name: "Boho Wrap Dress",
    brand: "Free People",
    price: "₹3,799",
    category: "Dresses",
    color: "#d97706",
    colorName: "Amber",
    tags: ["boho", "floral", "wrap"],
    rating: 4.5,
    reviews: 203,
    img: garment_5,
    liked: false,
    isNew: true,
  },
  {
    id: 6,
    name: "Structured Blazer",
    brand: "COS",
    price: "₹4,499",
    category: "Formal",
    color: "#374151",
    colorName: "Charcoal",
    tags: ["office", "formal", "blazer"],
    rating: 4.8,
    reviews: 156,
    img: garment_7,
    liked: true,
    isTrending: true,
  },
  {
    id: 7,
    name: "Yoga Athleisure Set",
    brand: "Lululemon",
    price: "₹4,999",
    category: "Athleisure",
    color: "#7c3aed",
    colorName: "Violet",
    tags: ["sport", "yoga", "activewear"],
    rating: 4.9,
    reviews: 521,
    img: garment_30,
    liked: false,
  },
  {
    id: 8,
    name: "Denim Wide-Leg Jeans",
    brand: "Levi's",
    price: "₹2,799",
    category: "Bottoms",
    color: "#1d4ed8",
    colorName: "Indigo",
    tags: ["denim", "casual", "wide-leg"],
    rating: 4.6,
    reviews: 378,
    img: garment_28,
    liked: false,
    isNew: true,
  },
  {
    id: 9,
    name: "Silk Slip Dress",
    brand: "Reformation",
    price: "₹6,499",
    category: "Dresses",
    color: "#fbbf24",
    colorName: "Champagne",
    tags: ["silk", "elegant", "party"],
    rating: 4.7,
    reviews: 134,
    img: garment_25,
    liked: true,
    isTrending: true,
  },
  {
    id: 10,
    name: "Leather Biker Jacket",
    brand: "AllSaints",
    price: "₹8,999",
    category: "Outerwear",
    color: "#292524",
    colorName: "Black",
    tags: ["leather", "biker", "edgy"],
    rating: 4.8,
    reviews: 267,
    img: garment_14,
    liked: false,
  },
  {
    id: 11,
    name: "Floral Crop Top",
    brand: "ASOS",
    price: "₹999",
    category: "Tops",
    color: "#f0abfc",
    colorName: "Lilac",
    tags: ["crop", "floral", "summer"],
    rating: 4.4,
    reviews: 89,
    img: garment_21,
    liked: false,
    isNew: true,
  },
  {
    id: 12,
    name: "Trench Coat",
    brand: "Burberry",
    price: "₹12,999",
    category: "Outerwear",
    color: "#92400e",
    colorName: "Camel",
    tags: ["trench", "classic", "luxury"],
    rating: 4.9,
    reviews: 445,
    img: garment_13,
    liked: true,
    isTrending: true,
  },
];

export const CATEGORIES = ["All", "Dresses", "Tops", "Bottoms", "Outerwear", "Formal", "Casual", "Streetwear", "Athleisure"] as const;

// Sample model photos for the try-on upload step
// export const SAMPLE_MODELS = [
//   { id: 1, img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80", label: "Sample 1" },
//   { id: 2, img: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&q=80", label: "Sample 2" },
//   { id: 3, img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80", label: "Sample 3" },
//   { id: 4, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80", label: "Sample 4" },
// ];
