import ProductList from './components/ProductList';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Велюровый костюм Baby Pink",
    price: 1490,
    image: "/images/velvet-costum.jpg",
    description: "Классический велюровый костюм в стиле 2000-х",
    category: "Костюмы",
    inStock: true
  },
  {
    id: 2,
    name: "Топ с бабочками",
    price: 490,
    image: "/images/top.jpg",
    description: "Яркий топ с принтом бабочек - must have Y2K",
    category: "Топы",
    inStock: true
  },
  {
    id: 3,
    name: "Джинсы Low Rise",
    price: 990,
    image: "/images/jins.jpg",
    description: "Джинсы с низкой посадкой в стиле нулевых",
    category: "Джинсы",
    inStock: true
  },
  {
    id: 4,
    name: "Мини-юбка с пайетками",
    price: 590,
    image: "/images/ubka.jpg",
    description: "Блестящая мини-юбка для вечеринки",
    category: "Юбки",
    inStock: false
  },
  {
    id: 5,
    name: "Кроп-топ металлик",
    price: 690,
    image: "/images/metalik.jpg",
    description: "Серебристый кроп-топ с эффектом металлик",
    category: "Топы",
    inStock: true
  },
  {
    id: 6,
    name: "Спортивный костюм Neon",
    price: 1190,
    image: "/images/sport.jpg",
    description: "Яркий неоновый спортивный костюм",
    category: "Костюмы",
    inStock: true
  },
  {
    id: 7,
    name: "Платформа Chunky",
    price: 1490,
    image: "/images/obyv.jpg",
    description: "Обувь на массивной платформе",
    category: "Обувь",
    inStock: true
  },
  {
    id: 8,
    name: "Рюкзак Mini Backpack",
    price: 790,
    image: "/images/symka.jpg",
    description: "Маленький рюкзак в стиле 2000-х",
    category: "Аксессуары",
    inStock: true
  },
  {
    id: 9,
    name: "Очки Butterfly Sunglasses",
    price: 190,
    image: "/images/ochki.jpg",
    description: "Солнцезащитные очки в форме бабочки",
    category: "Аксессуары",
    inStock: true
  },
  {
    id: 10,
    name: "Лонгслив с принтом",
    price: 990,
    image: "/images/longslif.jpg",
    description: "Лонгслив с ярким графическим принтом",
    category: "Топы",
    inStock: false
  },
  {
    id: 11,
    name: "Кардиган Mohair",
    price: 890,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500",
    description: "Пушистый кардиган пастельных тонов",
    category: "Верхняя одежда",
    inStock: true
  },
  {
    id: 12,
    name: "Шорты Denim Mini",
    price: 590,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500",
    description: "Короткие джинсовые шорты с заниженной талией",
    category: "Шорты",
    inStock: true
  }
];

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
             Y2K Fashion Store 
          </h1>
          <p className="text-gray-600 text-lg">
            Одежда в стиле Y2K по низким ценам!
          </p>
        </header>

        <ProductList products={products} />
      </div>
    </main>
  );
}