import {Order} from './order-model';


export interface Shoe {
  productid: number;
  productName: string;
  size: number;
  color: string;
  price: number;
  type: string;
  order?: Order;
}
