import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../shared/user.service';
import {OrderService} from '../../shared/order.service';
import {Order} from '../../shared/models/order-model';
import {User} from '../../shared/models/user-model';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  id: number;
  loading = true;
  order: Order;
  userForm = this.fb.group({
    username: [''],
    password: [''],
    isAdmin: [''],
    orderId: [''],
  });
  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserService,
              private orderService: OrderService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).
    subscribe(userFromRest => {
      this.loading = false;
      this.userForm.patchValue({
        username: userFromRest.username,
        isAdmin: userFromRest.isAdmin,
        orderId: userFromRest.orderList[0].orderId
      });
    });
  }
  save() {
    const userFromFields = this.userForm.value;
    this.orderService.getOrder(userFromFields.orderId)
      .subscribe(order => {
        this.order = order;
        const user: User = {
            id: this.id,
            username: userFromFields.username,
            password: userFromFields.password,
            isAdmin: userFromFields.isAdmin,
            orderList: [{
              orderId: this.order.orderId,
              orderDate: this.order.orderDate,
              activeOrder: this.order.activeOrder
            }]
          };

        this.userService.updateUser(user as User).
        subscribe(() => {
          this.router.navigateByUrl('/users');
        });
      });
  }

}
