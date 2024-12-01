export type ProductCardModel = {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  rating: number;
  imageMain: string;
  brand: string;
};

export type ProductModel = {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  rating: number;
  imageMain: string;
  images: ImageModel;
  brand: string;
};

export type ImageModel = {
  id: number;
  url: string;
  alt: string;
};
