'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  inStock: boolean;
}

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="bg-white/80">
          <CardHeader className="p-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-148 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent className="p-4">
            <Badge className="mb-2">{product.category}</Badge>
            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-xl font-bold text-purple-600 mt-2">
              {product.price.toLocaleString('ru-RU')} ₽
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button 
              className="w-full"
              disabled={!product.inStock}
            >
              {product.inStock ? '🛒 В корзину' : 'Распродано'}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}