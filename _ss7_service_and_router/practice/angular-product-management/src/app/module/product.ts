import {Category} from "./Category";

export interface Product {
  id: number;
  name: string;
  cost: number;
  category: Category;
}
