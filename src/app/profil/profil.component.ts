import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup,Validators, FormBuilder } from '@angular/forms';
import {ProfileService} from '../services/profile.service';
import * as firebase from 'firebase';
import { Router} from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
 updatePassword:FormGroup;
 profile:FormGroup;

 errorMessage:string;
 errorEmail:string;
 passwor:string="";
 urlphoto:string="https://www.formationengroupe.be/assets/img/user.png";
 tsk:number;
 mail;
  user;
  fileReceived:string;
  newpa:string;
 update:string="";
   file:File;
   







  constructor(private formBuilder: FormBuilder,
              private profileservice: ProfileService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.initForm();
  this.user = firebase.auth().currentUser;
     
  console.log(this.user.email);
  console.log(this.user.uid);
  console.log(this.user.photoURL);
  console.log(this.user);
   this.urlphoto=this.user.photoURL?this.user.photoURL:this.urlphoto;
   
   this.tsk=+this.user.displayName;
   this.mail=this.user.email;
   
  }

  initForm()
  {
    this.updatePassword=this.formBuilder.group({
     email:['',[Validators.required,Validators.email]],
     password1:['',[Validators.required,Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
     password2:['',[Validators.required,Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
     password3:['',[Validators.required,Validators.pattern(/[0-9a-zA-Z]{6,}/)]]

    });
  }
  onSubmit()
  {
    const email=this.updatePassword.get('email').value;
    const password1 =this.updatePassword.get('password1').value;
    const password2 =this.updatePassword.get('password2').value;
    const password3 =this.updatePassword.get('password3').value;

    console.log(email);
    console.log(password1);
    console.log(password2);
    console.log(password3);


     if(email==this.user.email)
  {
    this.errorEmail="";
   var user = firebase.auth().currentUser;

   const credential = firebase.auth.EmailAuthProvider.credential(
            email,
            password1
        )
         user.reauthenticateWithCredential(credential).then(()=>{
        console.log(" authentification reussi ");


        if(password2==password3 )
        {
         user.updatePassword(password2).then(()=>{
         
         this.update="change successful";
         console.log("update reussi");
         },(error)=> {
          
          this.newpa=error;
          console.log("update echoué");
         });

        }else // verification du nouveau mot de pass
        {
          this.errorEmail="";
          this.passwor="";
         this.newpa="check your new password";
        }


// verification du mot de pass encour
        },(error)=>{
          this.errorEmail="";
          this.newpa="";
          this.passwor=error.message;
         console.log(error.message);
         
        });
      

   //verification du mail encour     
  }else
  {
    console.log('verifier votre email');
    this.passwor="";
    this.newpa="";
    this.errorEmail="User unknown";
  }
  
    
  




  }







 // traitement de la photo

 onFileSelected(event:any) {
  this.file= event.target.files[0];
  if(this.file)
  {
    this.fileReceived="fileReceived";
  }else{this.fileReceived='';}

   
}







// transfert des données de angular vers firebase et snapshop de url
  onsubmit1()
  {
    this.fileReceived=''
  this.profileservice.uploadFile(this.file).then(
    (url:string)=>
    {
      this.urlphoto=url;
      
      console.log(this.urlphoto);

      var user = firebase.auth().currentUser;
      user.updateProfile({
        photoURL:this.urlphoto
      }).then(function() {
        console.log("update photo reussis");
        
      }).catch(function(error) {
        console.log(error.errorMessage);
      });



       
    
    }
  )
  
}






// delete photo
ondelete(){
var user = firebase.auth().currentUser;

user.updateProfile({
  photoURL:"https://www.formationengroupe.be/assets/img/user.png"
}).then(()=>{
  
  this.urlphoto=user.photoURL;
  
},(error)=>{
    this.errorEmail=error.message;
  })


}





}

