import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {ShoeListComponent} from './shoes/shoe-list/shoe-list.component';
import {ShoeDetailsComponent} from './shoes/shoe-details/shoe-details.component';
import {ShoeCreateComponent} from './shoes/shoe-create/shoe-create.component';
import {ShoeUpdateComponent} from './shoes/shoe-update/shoe-update.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {OrderListComponent} from './orders/order-list/order-list.component';
import {OrderCreateComponent} from './orders/order-create/order-create.component';
import {OrderDetailComponent} from './orders/order-detail/order-detail.component';
import {OrderUpdateComponent} from './orders/order-update/order-update.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserCreateComponent} from './users/user-create/user-create.component';
import {UserDetailComponent} from './users/user-detail/user-detail.component';
import {UserUpdateComponent} from './users/user-update/user-update.component';


const routes: Routes = [
  { path: 'shoes', component: ShoeListComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrderListComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'order-create', component: OrderCreateComponent, canActivate: [AuthGuard] },
  { path: 'user-create', component: UserCreateComponent, canActivate: [AuthGuard] },
  { path: 'user-detail/:id', component: UserDetailComponent, canActivate: [AuthGuard] },
  { path: 'user-update/:id', component: UserUpdateComponent, canActivate: [AuthGuard] },
  { path: 'order-detail/:id', component: OrderDetailComponent, canActivate: [AuthGuard] },
  { path: 'order-update/:id', component: OrderUpdateComponent, canActivate: [AuthGuard] },
  { path: 'shoe-create', component: ShoeCreateComponent, canActivate: [AuthGuard] },
  { path: 'shoe-update/:id', component: ShoeUpdateComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: ShoeDetailsComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
