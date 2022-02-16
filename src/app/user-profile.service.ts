import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private username:string;
  private access_token  = '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';
  updateuserProfiles: any;

  constructor(private http:HttpClient) {
    // console.log("service is ready!");
    this.username = 'faithremo';
  }

  getUserInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + this.access_token)
    
    
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" + this.access_token);
    map((res: { json: () => any}) => res.json());
  }
  getuserProfileRepos(){
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?access_token' + this.access_token);
    map((res: {json: () => any}) => res.json());
  }


  updateProfile(username: string){
    this.username = username;
  }
    
}
