import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {Order} from './models/order-model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl = environment.apiEndpoint + '/orders';
  constructor(private http: HttpClient,
              private authService: AuthenticationService) { }
  getOrders(): Observable<Order[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.get<Order[]>(this.apiUrl, httpOptions);
  }
  getOrder(id: number): Observable<Order> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Order>(url, httpOptions);
  }
  addOrder(order: Order): Observable<Order> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.post<Order>(this.apiUrl, order, httpOptions);
  }
  updateOrder(order: Order): Observable<Order> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    const url = `${this.apiUrl}/${order.orderId}`;
    return this.http.put<Order>(url, order);
  }
  deleteOrder(id: number): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.delete(this.apiUrl + '/' + id, httpOptions);
  }
}
