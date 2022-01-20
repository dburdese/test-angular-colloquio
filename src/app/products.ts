export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    category: 'Big'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    category: 'Mini'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'A great phone with one of the best audio',
    category: 'Standard'
  }
];
