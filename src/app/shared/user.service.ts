import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {User} from './models/user-model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.apiEndpoint + '/users';
  constructor(private http: HttpClient,
              private authService: AuthenticationService) { }
  getUsers(): Observable<User[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.get<User[]>(this.apiUrl, httpOptions);
  }
  getUser(id: number): Observable<User> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url, httpOptions);
  }
  addUser(user: User): Observable<User> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.post<User>(this.apiUrl, user, httpOptions);
  }
  updateUser(user: User): Observable<User> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put<User>(url, user);
  }
  deleteUser(id: number): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.delete(this.apiUrl + '/' + id, httpOptions);
  }

}
