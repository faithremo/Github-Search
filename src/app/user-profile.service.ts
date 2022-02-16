import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private username:string;
  private access_token  = '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';
  

  constructor(private ready:HttpClient) {
    // console.log("service is ready!");
    this.username = 'faithremo';
  }

  getUserInfo(){
    return this.ready.get("https://api.github.com/users/" + this.username + "?access_token=" + this.access_token)
    
    
  }

  getProfileRepos(){
    return this.ready.get("https://api.github.com/users/" + this.username + "/repos?access_token=" + this.access_token)
    
  }

  updateProfile(username: string){
    this.username = username;
  }
    
}
