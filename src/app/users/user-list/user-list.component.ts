import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';
import {User} from '../../shared/models/user-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  loading = true;
  users: User[];
  constructor(private userService: UserService) { }
  getUsers() {
    this.userService.getUsers()
      .subscribe(users => {
        this.loading = false;
        this.users = users;
      });
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .subscribe(() => {
        this.getUsers();
      });
  }
  ngOnInit() {
    this.getUsers();
  }

}
