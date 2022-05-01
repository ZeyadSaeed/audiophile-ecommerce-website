export interface ImagesType {
  desktop: string;
  mobile: string;
  tablet: string;
  _id: string;
}

export interface ProductType {
  category: string;
  categoryImage: ImagesType;
  cartImage: string;
  description: string;
  image: ImagesType;
  gallery: {
    first: ImagesType;
    second: ImagesType;
    third: ImagesType;
  };
  includes: [{ item: string; quantity: number }];
  name: string;
  cartName: string;
  new: boolean;
  others: [
    {
      image: ImagesType;
      name: string;
      slug: string;
    }
  ];
  features: string;
  price: number;
  slug: string;
  _id: string;
}

interface CartInterface {
  product: ProductType;
  quantity: number;
  _id: string;
}

export type CartType = CartInterface[] | [];
