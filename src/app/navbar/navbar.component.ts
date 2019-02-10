import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>;
  private isLoggedIn: Boolean= false;
  private email: string;

  constructor(public afAuth: AngularFireAuth, public router:Router) { 
  


    let status = localStorage.getItem('isLoggedIn')
    console.log(status)


    if (status == 'true'){
      this.isLoggedIn = true;
    }
    else{
      this.isLoggedIn = false;
    }


  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     // User is signed in.
  //     this.isLoggedIn= true;
  //   } else {
  //     // No user is signed in.
  //     this.isLoggedIn= false;
  //     this.router.navigate(['/login'])

  //   }
  // });
  }

  ngOnInit() {
  }

  logout(){
    this.afAuth.auth.signOut();
    this.isLoggedIn= false
    localStorage.setItem('isLoggedIn','false')
    this.router.navigate(['/login'])

  }

}
