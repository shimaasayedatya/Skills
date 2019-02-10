import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  itemList: AngularFireList<any>

  


 
  email: string ;
  myid: string;
  


  itemArray = []


  data = {
    name: '',
    phone: '',
    age: '',
    address: '',
    city: '',
    job: '',
    email:'',
    image :''
  }


  userkey :any


  ref : AngularFireStorageReference;
  task: AngularFireUploadTask;

uploadProgress: Observable<number>;
downloadURL: Observable<string | null>;
taskName:string;
id:string;

imageURL :string;
  constructor(private afStorage: AngularFireStorage,public db: AngularFireDatabase) {
   this.email = localStorage.getItem('email')
   this.myid = localStorage.getItem('uid')


   this.itemList = db.list('users')

   this.itemList.snapshotChanges()
     .subscribe(actions => {
       actions.forEach(action => {
         let y = action.payload.toJSON()
         y['$key'] = action.key
         this.userkey
                  // console.log(action.payload.toJSON())
                  // console.log(action.payload.child('uid').val())



         if (action.payload.child('uid').val() == this.myid) {
          this.userkey =action.key

          this.itemArray.push(y as ListItemClass)
          this.data.name = this.itemArray[0]['name']
          this.data.phone = this.itemArray[0]['phone']
          this.data.age = this.itemArray[0]['age']
          this.data.address = this.itemArray[0]['address']
          this.data.city = this.itemArray[0]['city']
          this.data.job = this.itemArray[0]['job']
          this.data.email = this.itemArray[0]['email']
          this.data.image = this.itemArray[0]['image']



         console.log(this.data)
          

        }

       })
     })
    }


  upload(event){
  const id = Math.random().toString(36).substring(2);
  this.ref = this.afStorage.ref('myURL/'+this.id);
  this.task = this.ref.put(event.target.files[0]);
  this.uploadProgress = this.task.percentageChanges();
  this.downloadURL = this.afStorage.ref('myURL/'+this.id).getDownloadURL();

  this.downloadURL.subscribe(url => {

    if(url){
      this.imageURL =url
    }

    console.log(this.imageURL)


    this.itemList.set(this.userkey
      , {
      name: this.data.name,
      phone: this.data.phone,
      age: this.data.age,
      address: this.data.address,
      city: this.data.city,
      job: this.data.job,
      uid :this.myid,
      email :this.email,
      image : this.imageURL
    })
  
    })
  

  }

  
  
  
// upload(event) {
//   // create a random id
//   const randomId = Math.random().toString(36).substring(2);
//   // create a reference to the storage bucket location
//   this.ref = this.afStorage.ref(randomId);
//   // the put method creates an AngularFireUploadTask
//   // and kicks off the upload
//   this.task = this.ref.put(event.target.files[0]).then((result) => {
//     // do you code after upload here
//   })
// }


  ngOnInit() {
  
  console.log(this.email)
  console.log(this.myid)

}


onEdit (){

  this.itemList.set(this.userkey
    , {
    name: this.data.name,
    phone: this.data.phone,
    age: this.data.age,
    address: this.data.address,
    city: this.data.city,
    job: this.data.job,
    uid :this.myid,
    email :this.email
  })

this.itemArray=[]
}
}

export class ListItemClass {
  $key: string;
  name: string;
  phone: string;
  age: string;
  address: string;
  city: string;
  job: string;
  email : string;

}