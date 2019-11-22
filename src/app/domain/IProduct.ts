import { ICategory } from './ICategory';

export interface IProduct {
  productName: string;
  category?: ICategory;
  description: string;
  image?: string;
  year?: number;
  price?: number;
  region?: number;
}
