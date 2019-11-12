import {Order} from './order-model';


export interface User {
  id?: number;
  username: string;
  password?: string;
  isAdmin: boolean;
  orderList: Order[];
}
