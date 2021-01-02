import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monAgence';
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyBx_08dXO9knbx2dQVvY9-UbF8DClVp0dk",
      authDomain: "adamou1.firebaseapp.com",
      databaseURL: "https://adamou1-default-rtdb.firebaseio.com",
      projectId: "adamou1",
      storageBucket: "adamou1.appspot.com",
      messagingSenderId: "157286465329",
      appId: "1:157286465329:web:e8e2ef0521f6bfcad33a10",
      measurementId: "G-L3HJ16G7KX"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

}
