import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/storage';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddskillComponent } from './addskill/addskill.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyskillComponent } from './myskill/myskill.component';
import { AllskillsComponent } from './allskills/allskills.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { DetailsComponent } from './details/details.component';
import { UserprofileComponent } from './userprofile/userprofile.component';




const routes:Routes =[
  { path:'' , redirectTo:'home' , pathMatch:'full'},
  { path:'home' , component:HomeComponent},
  { path:'addskill' , component:AddskillComponent},
  { path:'login' , component:LoginComponent },
  { path:'register' , component: RegisterComponent},
  { path:'myskill' , component: MyskillComponent},
  { path:'allskills' , component:  AllskillsComponent},
  { path:'details/:id' , component:  DetailsComponent},
  { path:'userprofile' , component:  UserprofileComponent},





]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddskillComponent,
    LoginComponent,
    RegisterComponent,
    MyskillComponent,
    AllskillsComponent,
    DetailsComponent,
    UserprofileComponent,
    // AngularFirestoreModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule ,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule

  ],
  providers: [],
  //declarations: [ AppComponent ],

  bootstrap: [AppComponent]
})
export class AppModule { }
