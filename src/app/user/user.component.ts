import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRequestService } from '../user-request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User
  constructor(private userService:UserRequestService) { }


  ngOnInit(): void {
    this.userService.userRequest()
    this.user = this.userService.user
  }

}
