import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageuserComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
