import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {ShoeListComponent} from './shoes/shoe-list/shoe-list.component';
import {ShoeDetailsComponent} from './shoes/shoe-details/shoe-details.component';
import {ShoeCreateComponent} from './shoes/shoe-create/shoe-create.component';
import {ShoeUpdateComponent} from './shoes/shoe-update/shoe-update.component';


const routes: Routes = [
  { path: 'shoes', component: ShoeListComponent },
  { path: 'shoe-create', component: ShoeCreateComponent },
  { path: 'shoe-update/:id', component: ShoeUpdateComponent },
  { path: 'detail/:id', component: ShoeDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
