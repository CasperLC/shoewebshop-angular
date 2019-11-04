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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShoeListComponent,
    ShoeDetailsComponent,
    ShoeCreateComponent,
    ShoeUpdateComponent
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
    ShoeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
