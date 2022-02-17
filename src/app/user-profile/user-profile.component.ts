import { Component, OnInit } from '@angular/core';

import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
   userProfile:any;
   repos: any;
  username: string="faithremo"

  constructor(private UserProfileService: UserProfileService) {
    
   }

   findProfile(){
     this.UserProfileService.updateProfile(this.username);
     console.log(this.UserProfileService.username)
     this.UserProfileService.getUserInfo().subscribe(userProfile =>{
      console.log(userProfile);
      this.userProfile = userProfile;
      // console.log(this.username);
    });

    this.UserProfileService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    })
   }

  ngOnInit(): void {
    this.findProfile()
  }

}


