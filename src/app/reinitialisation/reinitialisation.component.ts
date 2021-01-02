import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router} from '@angular/router';
import { FormsModule, FormGroup,Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reinitialisation',
  templateUrl: './reinitialisation.component.html',
  styleUrls: ['./reinitialisation.component.css']
})
export class ReinitialisationComponent implements OnInit {
  signinForm:FormGroup;
  errorMessage:string=" ";
  mailReçu:string="an email has been sent to your email address";
  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();

  }



  initForm()
  {
    this.signinForm=this.formBuilder.group({
     email:['',[Validators.required,Validators.email]],
     number:['',[Validators.required,Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }



  onSubmit()
  {
  
    const email=this.signinForm.get('email').value;
    const number =this.signinForm.get('number').value;

    console.log(number);
    console.log(email);

    var auth = firebase.auth();
    var emailAddress =email;

    auth.sendPasswordResetEmail(emailAddress).then(()=>{
      this.errorMessage=" ";
      this.errorMessage=this.mailReçu;

    },(error)=>{
      this.errorMessage=" ";
      this.errorMessage=error;
   });

   


  }

 
  getcolor()
   {
    if(this.errorMessage===this.mailReçu) {
      return 'green';
    } else if(this.errorMessage!==this.mailReçu){
      return 'red';
    }
     
   }



  

}
