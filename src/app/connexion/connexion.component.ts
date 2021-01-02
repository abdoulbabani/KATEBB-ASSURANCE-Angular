import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import* as firebase from 'firebase';
import { Router,} from '@angular/router';
import { from } from 'rxjs';
import { FormsModule, FormGroup,Validators, FormBuilder } from '@angular/forms';
import {AuthserviceService} from '../services/authservice.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  signinForm:FormGroup;
  errorMessage:string;

  constructor(private formBuilder: FormBuilder,
            private authService:AuthserviceService,
             private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm()
  {
    this.signinForm=this.formBuilder.group({
     email:['',[Validators.required,Validators.email]],
     password:['',[Validators.required,Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit()
  {
    const email=this.signinForm.get('email').value;
    const password =this.signinForm.get('password').value;

    console.log(email);
    console.log(password);

    this.authService.signInUser(email,password).then(
      ()=>{
        this.router.navigate(['/documentation']);
      },
      (error)=>{
        this.errorMessage=error;
        
      }
    );

  }

}
