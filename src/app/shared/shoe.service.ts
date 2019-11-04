import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Shoe} from './models/shoe-model';
import {AuthenticationService} from './authentication.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ShoeService {

  apiUrl = environment.apiEndpoint + '/shoes';
  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) { }

  getShoes(): Observable<Shoe[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Shoe[]>(this.apiUrl, httpOptions);
  }
  getShoe(id: number): Observable<Shoe> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Shoe>(url, httpOptions);
  }
  addShoe(shoe: Shoe): Observable<Shoe> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.post<Shoe>(this.apiUrl, shoe, httpOptions);
  }
  updateShoe(shoe: Shoe): Observable<Shoe> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    const url = `${this.apiUrl}/${shoe.productid}`;
    return this.http.put<Shoe>(url, shoe);
  }
  deleteShoe(id: number): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.delete(this.apiUrl + '/' + id, httpOptions);
  }
}
