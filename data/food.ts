import { ImageSourcePropType } from 'react-native';

export interface FilterItem {
    id: number;
    name: string;
    category: 'Pedas' | 'Gurih' | 'Manis' | 'Asin' ;
    image: ImageSourcePropType;
    weight: number;
    rating: number;
    ingredients: string;
    description: string;
  }
  
  export const foodData: FilterItem[] = [
    {
        id: 1,
        name: 'Rendang',
        category: 'Pedas',
        image: require('../assets/food-images/rendang.jpg'),
        weight: 550,
        rating: 4.7,
        ingredients: "Daging sapi, santan, cabai, dan rempah-rempah",
        description: "Daging sapi dengan bumbu pedas dan santan khas Padang.",
    },
    {
        id: 2,
        name: 'Sambal Matah',
        category: 'Pedas',
        image: require('../assets/food-images/sambal-matah.jpg'),
        weight: 100,
        rating: 4.5,
        ingredients: "Cabai, bawang merah, bawang putih, dan serai",
        description: "Sambal mentah khas Bali dengan irisan cabai dan bawang.",
    },
    {
        id: 3,
        name: 'Ayam Betutu',
        category: 'Pedas',
        image: require('../assets/food-images/ayam-betutu.jpg'),
        weight: 600,
        rating: 4.6,
        ingredients: "Ayam, rempah-rempah, daun pisang",
        description: "Ayam berbumbu lengkap dengan rasa pedas rempah.",
    },
    {
        id: 4,
        name: 'Klepon',
        category: 'Manis',
        image: require('../assets/food-images/klepon.jpg'),
        weight: 150,
        rating: 4.9,
        ingredients: "Tepung ketan, gula merah, kelapa parut",
        description: "Bola-bola ketan isi gula merah yang manis.",
    },
    {
        id: 5,
        name: 'Dodol Garut',
        category: 'Manis',
        image: require('../assets/food-images/dodol-garut.jpg'),
        weight: 250,
        rating: 4.7,
        ingredients: "Gula aren, tepung ketan, santan",
        description: "Dodol kenyal dengan rasa manis gula aren.",
    },
    {
        id: 6,
        name: 'Bika Ambon',
        category: 'Manis',
        image: require('../assets/food-images/bika-ambon.jpg'),
        weight: 500,
        rating: 4.8,
        ingredients: "Santan, gula, telur, tepung sagu",
        description: "Kue legit bertekstur berserat khas Medan.",
    },
    {
        id: 7,
        name: 'Pempek',
        category: 'Gurih',
        image: require('../assets/food-images/pempek.jpg'),
        weight: 300,
        rating: 4.8,
        ingredients: "Ikan, tepung sagu, kuah cuka",
        description: "Olahan ikan dengan kuah cuka pedas gurih khas Palembang.",
    },
    {
        id: 8,
        name: 'Serabi',
        category: 'Gurih',
        image: require('../assets/food-images/serabi.jpg'),
        weight: 200,
        rating: 4.6,
        ingredients: "Tepung beras, santan, kelapa",
        description: "Kue tradisional dengan rasa santan gurih khas Jawa Barat.",
    },
    {
        id: 9,
        name: 'Tinutuan/Bubur Manado',
        category: 'Gurih',
        image: require('../assets/food-images/tinutuan.jpg'),
        weight: 450,
        rating: 4.7,
        ingredients: "Beras, sayuran, rempah-rempah",
        description: "Bubur sayuran gurih dan menyehatkan khas Manado.",
    },
    {
        id: 10,
        name: 'Ikan Asin Sambal',
        category: 'Asin',
        image: require('../assets/food-images/ikan-asin.jpg'),
        weight: 200,
        rating: 4.4,
        ingredients: "Ikan asin, cabai, bawang merah",
        description: "Ikan asin dengan sambal khas berbagai daerah.",
    },
    {
        id: 11,
        name: 'Lemper',
        category: 'Asin',
        image: require('../assets/food-images/lemper.jpg'),
        weight: 120,
        rating: 4.5,
        ingredients: "Beras ketan, daging ayam, daun pisang",
        description: "Ketan isi daging ayam dengan rasa asin gurih.",
    },
    {
        id: 12,
        name: 'Rempeyek',
        category: 'Asin',
        image: require('../assets/food-images/rempeyek.jpg'),
        weight: 250,
        rating: 4.6,
        ingredients: "Tepung beras, kacang tanah, santan",
        description: "Keripik dengan kacang tanah berbalut adonan asin.",
    },
];