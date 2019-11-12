import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home/home.component';
import { ShoeListComponent } from './shoes/shoe-list/shoe-list.component';
import { ShoeDetailsComponent } from './shoes/shoe-details/shoe-details.component';
import { ShoeCreateComponent } from './shoes/shoe-create/shoe-create.component';
import { ShoeUpdateComponent } from './shoes/shoe-update/shoe-update.component';
import { AuthenticationService } from './shared/authentication.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { ShoeService } from './shared/shoe.service';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { DatePipe } from '@angular/common';
import { OrderCreateComponent } from './orders/order-create/order-create.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { OrderUpdateComponent } from './orders/order-update/order-update.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserUpdateComponent } from './users/user-update/user-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShoeListComponent,
    ShoeDetailsComponent,
    ShoeCreateComponent,
    ShoeUpdateComponent,
    OrderListComponent,
    OrderCreateComponent,
    OrderDetailComponent,
    OrderUpdateComponent,
    UserListComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    DatePipe,
    ShoeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
