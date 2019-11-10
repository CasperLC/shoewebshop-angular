import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {OrderService} from '../../shared/order.service';
import {Shoe} from '../../shared/models/shoe-model';
import {User} from '../../shared/models/user-model';
import {Order} from '../../shared/models/order-model';
import {ShoeService} from '../../shared/shoe.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit {

  shoe: Shoe;
  orderForm = this.fb.group({
    orderDate: [''],
    activeOrder: [''],
    shoeList: this.fb.group({
      productid: [''],
    })
  });
  constructor(private fb: FormBuilder,
              private router: Router,
              private orderService: OrderService,
              private shoeService: ShoeService) { }

  ngOnInit() {
  }
  save() {
    const orderFromFields = this.orderForm.value;
    this.shoeService.getShoe(orderFromFields.shoeList.productid)
      .subscribe(shoe => {
        this.shoe = shoe;
        const order: Order = {
          activeOrder: orderFromFields.activeOrder,
          orderDate: orderFromFields.orderDate,
          shoeList: [{
            productid: this.shoe.productid,
            productName: this.shoe.productName,
            type: this.shoe.type,
            size: this.shoe.size,
            price: this.shoe.price,
            color: this.shoe.color
          }],
        };
        this.orderService.addOrder(order as Order).
        subscribe(() => {
          this.router.navigateByUrl('/orders');
        });
      });
  }

}

// shoeList: this.fb.group({
// }),
