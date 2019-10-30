import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Shoe} from './models/shoe-model';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {

  apiUrl = environment.apiEndpoint + '/shoes';
  constructor(private http: HttpClient) { }

  getShoes(): Observable<Shoe[]> {
    return this.http.get<Shoe[]>(this.apiUrl);
  }
  getShoe(id: number): Observable<Shoe> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Shoe>(url);
  }
  addShoe(shoe: Shoe): Observable<Shoe> {
    return this.http.post<Shoe>(this.apiUrl, shoe);
  }
  updateShoe(shoe: Shoe): Observable<Shoe> {
    const url = `${this.apiUrl}/${shoe.productid}`;
    return this.http.put<Shoe>(url, shoe);
  }
  deleteShoe(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
