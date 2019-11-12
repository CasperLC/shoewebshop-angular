import { Component, OnInit } from '@angular/core';
import {Shoe} from '../../shared/models/shoe-model';
import {User} from '../../shared/models/user-model';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../shared/order.service';
import {Order} from '../../shared/models/order-model';
import {ShoeService} from '../../shared/shoe.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.scss']
})
export class OrderUpdateComponent implements OnInit {

  id: number;
  currentDate: string;
  loading = true;
  shoe: Shoe;
  orderForm = this.fb.group({
    orderDate: [''],
    activeOrder: [''],
    productid: ['']
  });
  constructor(private fb: FormBuilder,
              private router: Router,
              private orderService: OrderService,
              private route: ActivatedRoute,
              private shoeService: ShoeService,
              private datepipe: DatePipe) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOrder(this.id).
    subscribe(orderFromRest => {
      orderFromRest.orderDateShow = this.datepipe.transform(orderFromRest.orderDate, 'yyyy/MM/dd');
      this.loading = false;
      this.currentDate = orderFromRest.orderDateShow;
      this.orderForm.patchValue({
        orderDate: orderFromRest.orderDate,
        activeOrder: orderFromRest.activeOrder,
        productid: orderFromRest.shoeList[0].productid
      });
    });
  }
  save() {
    const orderFromFields = this.orderForm.value;
    this.shoeService.getShoe(orderFromFields.productid)
      .subscribe(shoe => {
        this.shoe = shoe;
        const order: Order = {
          orderId: this.id,
          activeOrder: orderFromFields.activeOrder,
          orderDate: orderFromFields.orderDate,
          shoeList: [{
            productid: this.shoe.productid,
            productName: this.shoe.productName,
            type: this.shoe.type,
            size: this.shoe.size,
            price: this.shoe.price,
            color: this.shoe.color,
          }],
        };
        this.orderService.updateOrder(order as Order).
        subscribe(() => {
          this.router.navigateByUrl('/orders');
        });
      });
  }

}
