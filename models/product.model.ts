export type ProductModel = {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  rating: number;
  images: { id: number; url: string }[];
  brand: string;
};
