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


const routes: Routes = [
  { path: 'shoes', component: ShoeListComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrderListComponent, canActivate: [AuthGuard] },
  { path: 'order-create', component: OrderCreateComponent, canActivate: [AuthGuard] },
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
