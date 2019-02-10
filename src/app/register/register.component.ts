import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email :string ='';
  password: string ='';

  constructor(private fire:AngularFireAuth, private router:Router) { }

  ngOnInit() {
  }
  myRegister(){
    this.fire.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then(user => {
      console.log(this.email, this.password)
      this.router.navigate(['home'])
    }).catch(error=>{
      console.log(error)
    })
  }
}
