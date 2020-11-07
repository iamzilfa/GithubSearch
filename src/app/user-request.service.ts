import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  user: User;

  constructor(private http:HttpClient) { 
    this.user = new User("","","",0);
  }

  quoteRequest(){
    interface ApiResponse{
      avatar_url:string;
      name:string;
      login:string;
      public_repos:number
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.user.avatar_url = response.avatar_url
        this.user.name = response.name
        this.user.login = response.login
        this.user.public_repos = response.public_repos

        resolve()
      },
      error=>{
        this.user.name = "Hello Dear"
        this.user.login = "Enter your url"

        reject(error)
      })
    })
    return promise
  }

}
