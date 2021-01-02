import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  Proile:string;
  urlimg: string;
  use:string="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg";
  
  constructor() { }
  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        
        const upload = firebase.storage().ref()
          .child('images/'+ file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement…');
          },
          (error) => {
            console.log('Erreur de chargement ! : ' + error);
            reject();
          },
          () => {
            console.log('photo chargé')
            resolve(upload.snapshot.ref.getDownloadURL());
          }
        );
      }
    );
}

get(){
  
  return new Promise((resolve, reject)=>{
    var user = firebase.auth().currentUser;
      if(user.photoURL){resolve(user.photoURL)}
      else{reject(this.use)}

  } )
    
  }
 

 

 
  
  
}
