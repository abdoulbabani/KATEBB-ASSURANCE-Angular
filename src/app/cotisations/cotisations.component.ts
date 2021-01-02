import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-cotisations',
  templateUrl: './cotisations.component.html',
  styleUrls: ['./cotisations.component.css']
})
export class CotisationsComponent implements OnInit {
  tsk:number;
  mail;
  url:string="https://www.formationengroupe.be/assets/img/user.png";
  constructor() { }

  ngOnInit(): void {
    var user = firebase.auth().currentUser;

    this.url=user.photoURL?user.photoURL:this.url;
    this.tsk=+user.displayName;
    this.mail=user.email;
  }

}
