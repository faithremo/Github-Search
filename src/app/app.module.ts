import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { httpModule } from '@angular/http';

import { UserProfileService } from 'user-profile/user-profile.component';


import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    HttpModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
