import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user!: IUser;

  constructor(private router: Router) {}

  onClick(user: IUser){
    this.router.navigate(['/user/' + user.id]);
  }

}
