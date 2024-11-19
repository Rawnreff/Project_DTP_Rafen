import { ImageSourcePropType } from 'react-native';

export interface FoodType {
  id: number;
  name: string;
  image: ImageSourcePropType;
  weight: number;
  rating: number;
  ingredients: string;
  description: string;
}

export const foodData: FoodType[] = [
  {
    id: 1,
    name: 'Primavera Pizza',
    image: require('../assets/food-images/pizza.jpg'),
    weight: 540,
    rating: 5.0,
    ingredients: "Loram Ipsum Dolor Sit Amet",
    description: "Loram Ipsum Dolor Sit Amet",
  },
  {
    id: 2,
    name: 'Seafood Pasta',
    image: require('../assets/food-images/seafood-pasta.jpg'),
    weight: 420,
    rating: 4.8,
    ingredients: "Loram Ipsum Dolor Sit Amet",
    description: "Loram Ipsum Dolor Sit Amet",
  },
  {
    id: 3,
    name: 'Rendang',
    image: require('../assets/food-images/rendang.jpg'),
    weight: 550,
    rating: 4.7,
    ingredients: "Loram Ipsum Dolor Sit Amet",
    description: "Loram Ipsum Dolor Sit Amet",
  },
];
