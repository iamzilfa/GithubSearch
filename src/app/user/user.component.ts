
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRequestService } from '../user-request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserRequestService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  loginName = "";

  submitUser() {
    this.userService.userRequest(this.loginName)
    console.log(this.loginName)
  }
  constructor(private userService: UserRequestService) { }



  ngOnInit() {
    this.userService.userRequest("iamzilfa")
    this.user = this.userService.user
  }
}