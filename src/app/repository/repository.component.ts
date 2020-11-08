import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { UserRequestService } from '../user-request.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  providers: [UserRequestService],
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repository: Repository;
  allRepo = "";

  submitRepos() {
    this.repoService.repoRequest(this.allRepo)
    console.log(this.allRepo)
  }
  constructor(private repoService: UserRequestService) { }



  ngOnInit() {
    this.repoService.repoRequest("iamzilfa")
    this.repository = this.repoService.repository
  }

}
