import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.css']
})
export class EstimationComponent implements OnInit {
  url:string="https://www.formationengroupe.be/assets/img/user.png";
  tsk:number;
 mail;
  constructor() { }

  ngOnInit(): void {
    var user = firebase.auth().currentUser;

 this.url=user.photoURL?user.photoURL:this.url;
 this.tsk=+user.displayName;
 this.mail=user.email;
  }

}
