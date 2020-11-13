import { Component, OnInit } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth:boolean =true;
  constructor() { }

  ngOnInit(): void {
    
  }

}
