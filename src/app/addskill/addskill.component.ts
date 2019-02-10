//import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';


//import { AngularFireAuth } from 'angularfire2/auth';
//import { AngularFireDatabase } from 'angularfire2/database';


import { Router } from '@angular/router';

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {

  data = {
    name: '',
    phone: '',
    comments: '',
    skill: '',
    province: '',
    price: ''
  }
  email: string ='';
  uid:any;

  items: Observable<any[]>;
  itemList: AngularFireList<any>
  constructor(private fire:AngularFireAuth,public db: AngularFireDatabase, public router:Router) {
    this.itemList = db.list('skill')

    let user = this.fire.auth.currentUser.email
    //let user = localStorage.getItem('email')
    this.email = user
    console.log(user)
    console.log('----------------')
    

    this.uid = localStorage.getItem('uid')

    // this.fire.authState.subscribe(auth=>{
    //   if(auth){
    //     this.uid =auth.uid   })
        console.log ('uid: '+ this.uid)
      }
     

  ngOnInit() {
   
   console.log(this.data.name)
   
  }
  insertSkill() {

    this.itemList.push({
      name: this.data.name,
      phone: this.data.phone,
      comments: this.data.comments,
      skill: this.data.skill,
      province: this.data.province,
      price: this.data.price,
      email : this.email,
      uid :  this.uid
    })
      this.router.navigate(['/myskill'])
  }

}
