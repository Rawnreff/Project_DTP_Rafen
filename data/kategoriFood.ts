import { ImageSourcePropType } from 'react-native';

export interface FilterItem {
    id: number;
    name: string;
    category: 'Padang' | 'Seafood' | 'Italiano';
    image: ImageSourcePropType;
    weight: number;
    rating: number;
    ingredients: string;
    description: string;
  }
  
  export const foodData: FilterItem[] = [
    {
      id: 1,
      name: 'Primavera Pizza',
      category: 'Italiano',
      image: require('../assets/food-images/pizza.jpg'),
      weight: 540,
      rating: 5.0,
      ingredients: "Loram Ipsum Dolor Sit Amet",
      description: "Loram Ipsum Dolor Sit Amet",
    },
    {
      id: 2,
      name: 'Seafood Pasta',
      category: 'Seafood',
      image: require('../assets/food-images/seafood-pasta.jpg'),
      weight: 420,
      rating: 4.8,
      ingredients: "Loram Ipsum Dolor Sit Amet",
      description: "Loram Ipsum Dolor Sit Amet",
    },
    {
      id: 3,
      name: 'Rendang',
      category: 'Padang',
      image: require('../assets/food-images/rendang.jpg'),
      weight: 550,
      rating: 4.7,
      ingredients: "Loram Ipsum Dolor Sit Amet",
      description: "Loram Ipsum Dolor Sit Amet",
    },
  ];
  