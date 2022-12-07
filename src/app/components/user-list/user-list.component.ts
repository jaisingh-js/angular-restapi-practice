import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users!: IUser[];

  constructor(private userService: UserService) {}

  ngOnInit(){
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }


}
