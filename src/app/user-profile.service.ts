import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private username:string;
  private repository: string;
  private access_token  = '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';

  constructor(private ready:Http) {
    console.log("service is ready!");
    this.username = 'faithremo';
    this.repository='';
  }

  getUserInfo(){
    return this.ready.get("https://api.github.com/users/faithremo?access_token=' + apiKey" + this.username + this.repository)
    .map(res => res.json());
    
  }
    
}
