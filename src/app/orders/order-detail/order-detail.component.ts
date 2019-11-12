import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../shared/order.service';
import {ActivatedRoute} from '@angular/router';
import {Order} from '../../shared/models/order-model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  order: Order;
  constructor(private orderService: OrderService,
              private route: ActivatedRoute,
              private datepipe: DatePipe) { }

  ngOnInit() {
    this.getOrder();
  }
  getOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOrder(id)
      .subscribe(order => {
        order.orderDateShow = this.datepipe.transform(order.orderDate, 'yyyy/MM/dd');
        this.order = order;
      });
  }

}
