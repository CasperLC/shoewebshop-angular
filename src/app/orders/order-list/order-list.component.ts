import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../shared/order.service';
import {Order} from '../../shared/models/order-model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  loading = true;
  orders: Order[];
  constructor(private orderService: OrderService,
              private datepipe: DatePipe) { }
  getOrders() {
    this.orderService.getOrders()
      .subscribe(orders => {
        for (const order of orders) {
          order.orderDateShow = this.datepipe.transform(order.orderDate, 'yyyy/MM/dd');
        }
        this.loading = false;
        this.orders = orders;
      });
  }
  deleteOrder(id: number) {
    this.orderService.deleteOrder(id)
      .subscribe(() => {
        this.getOrders();
      });
  }

  ngOnInit() {
    this.getOrders();
  }

}
