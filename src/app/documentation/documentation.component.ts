import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {ProfileService} from '../services/profile.service';


@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  tsk:number;
  mail;
url:string="https://www.formationengroupe.be/assets/img/user.png";
  constructor(private profileservice: ProfileService) { }
 
  ngOnInit(): void {
   var user = firebase.auth().currentUser;

 this.url=user.photoURL?user.photoURL:this.url;
 this.tsk=+user.displayName;
 this.mail=user.email;
 console.log("gachi :" +this.url); 

    
  }

 
  

}
