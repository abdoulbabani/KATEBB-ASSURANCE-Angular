import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup,Validators, FormBuilder }from '@angular/forms';
import { Router,} from '@angular/router';
import {AuthserviceService} from '../services/authservice.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-enregistrement',
  templateUrl: './enregistrement.component.html',
  styleUrls: ['./enregistrement.component.css']
})
export class EnregistrementComponent implements OnInit {
  signupForm:FormGroup;
  errorMessage:string;
  error:string;

  constructor(private formBuilder: FormBuilder,
             private authService: AuthserviceService,
              private router: Router) 
  {  }

  ngOnInit(): void {
    
      this.initForm();
 
  }

  initForm()
  {
    this.signupForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      password1:['',[Validators.required,Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      number:['',[Validators.required]],
      text:['',[Validators.required]],
      organisme:['',[Validators.required]]
     });

  }

  onSubmit()
  {
    const email=this.signupForm.get('email').value;
    const password =this.signupForm.get('password').value;
    const password1 =this.signupForm.get('password1').value;
    const number =this.signupForm.get('number').value;
    const text =this.signupForm.get('text').value;
    const organisme =this.signupForm.get('organisme').value;

    console.log(email);
    console.log(password);
    console.log(password1);
    console.log(number);
    console.log(text);
    console.log(organisme);
   if(password==password1)
   {
      this.authService.createNewUser(email,password).then(
        ()=>{

          var user = firebase.auth().currentUser;

user.updateProfile({
     displayName:number,
     
      }).then(function() {
   console.log("tsk  :" +user.displayName);
     }).catch(function(error) {
  console.log("erreur sur tsk :");
    });

        this.router.navigate(['/documentation']);
        },
        (error)=>{
        this.errorMessage=error;
        }
      );
   }else
   this.error="   Incorrect e-mail or password";
}
  

}
