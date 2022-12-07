import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  user!: IUser;
  id!: string | null;

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id){
      this.userService.getUser(this.id).subscribe((user) => (this.user = user));
    }
  }

}
