import { Component, OnInit } from '@angular/core';
import {Order} from '../../shared/models/order-model';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../../shared/user.service';
import {Router} from '@angular/router';
import {OrderService} from '../../shared/order.service';
import {User} from '../../shared/models/user-model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  order: Order;
  userForm = this.fb.group({
    username: [''],
    password: [''],
    isAdmin: [''],
    orderList: this.fb.group({
      orderId: [''],
    })
  });
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private orderService: OrderService) { }

  ngOnInit() {
  }
  save() {
    const userFromFields = this.userForm.value;
    this.orderService.getOrder(userFromFields.orderList.orderId)
      .subscribe(order => {
        this.order = order;
        const user: User = {
          username: userFromFields.username,
          password: userFromFields.password,
          isAdmin: userFromFields.isAdmin,
          orderList: [{
            orderId: this.order.orderId,
            orderDate: this.order.orderDate,
            activeOrder: this.order.activeOrder
          }]
        };
        this.userService.addUser(user as User).
        subscribe(() => {
          this.router.navigateByUrl('/users');
        });
      });
  }

}
