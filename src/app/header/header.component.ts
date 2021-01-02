import { Component, OnInit } from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuardService} from '../services/auth-guard.service';
import * as firebase from 'firebase';
import {AuthserviceService} from '../services/authservice.service';
import {ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public urlphoto="https://www.formationengroupe.be/assets/img/user.png";
 
  isAuth:boolean =true;
  constructor(private authService: AuthserviceService,
              private profileservice: ProfileService) {
                
               }

 
  ngOnInit(): void {
    
    firebase.auth().onAuthStateChanged(
      (user)=>
      {
        if(user){
          this.isAuth=false;
          this.urlphoto=user.photoURL?user.photoURL:this.urlphoto;
          
        }else
        {
          this.isAuth=true;
        }
      } 
    );
    
   
    
   
  }

  
  
  
  onSignOut()
  {
    this.authService.signOutUser();
  }

}
