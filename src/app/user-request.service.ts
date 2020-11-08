import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';
@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  user: User
  repository: Repository

  constructor(private http: HttpClient) {
    this.user = new User("", "", "", 0,0,0,new Date,"");
    this.repository = new Repository("", "", "", "")
  }
  userRequest(loginName) {

    var userInput = loginName

    interface ApiResponse {
      avatar_url: string;
      name: string;
      login: string;
      public_repos: number;
      followers:number;
      following:number;
      created_at:Date;
      html_url:string;

    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + userInput + "?access_token=2a23b3e4dc095aa8d13e4aad2134f9b536ad325f").toPromise().then(response => {
        this.user.avatar_url = response.avatar_url
        this.user.name = response.name
        this.user.login = response.login
        this.user.public_repos = response.public_repos
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.created_at = response.created_at
        this.user. html_url = response. html_url

        resolve()
      },
        error => {
          this.user.name = "Error - Unable to get Repo"

          reject(error)
        }
      )
    })
    return promise
  }


  repoRequest(allRepo) {

    var repoInput = allRepo

    interface Response {
      name: string;
      description: string;
      language: string;
      html_url: string

    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<Response>("https://api.github.com/users/" + repoInput + "/repos?order=created&sort=asc?access_token=2a23b3e4dc095aa8d13e4aad2134f9b536ad325f").toPromise().then(response => {
        this.repository.name = response.name
        this.repository.description = response.description
        this.repository.language = response.language
        this.repository.html_url = response.html_url

        resolve()
      },
        error => {
          this.repository.name = "Error - Unable to get Repo"

          reject(error)
        }
      )
    })
    return promise
  }

}
