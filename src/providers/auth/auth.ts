import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { RequestOptions, Headers } from '@angular/http';

@Injectable()
export class AuthProvider {

  public baseUrl = "http://localhost:8080/login";

  constructor(public http: HttpClient, public storage: Storage) {

  }

  login(credentials: any) {
    let headers = new Headers({      
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    
    let options = new RequestOptions({  headers : headers });    
    return this.http.post(this.baseUrl + '/autenticar/usuario',  credentials);  
  }

  userIsLogged() {
    this.storage.get('token').then(val => {
      if (val !== undefined){
        return val;
      } else {
        return false;
      }
    })
  }

  logout() {
    this.storage.remove('token');
  }

}
