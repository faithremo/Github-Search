import { Component, OnInit } from '@angular/core';
// import { profile } from 'console';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
   userProfile:any[];
   repos: any[];

  constructor(private UserProfileService: UserProfileService) {
    this.UserProfileService.getUserInfo().subscribe(userProfile =>{
      console.log(userProfile);
      this.userProfile = userProfile;
    });

    this.UserProfileService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    })
   }

  ngOnInit(): void {
  }

}
function userProfile(userProfile: any) {
  throw new Error('Function not implemented.');
}

