import {Shoe} from './shoe-model';
import {User} from './user-model';


export interface Order {
  orderId: number;
  orderDate: Date;
  shoeList?: Shoe[];
  user?: User;
  activeOrder: boolean;
}
