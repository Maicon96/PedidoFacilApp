import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RequestOptions, Headers } from '@angular/http';

@Injectable()
export class UsuarioProvider {

  
  public baseUrl = "http://localhost:8080/usuario";

  constructor(public http: HttpClient) {
    console.log('Hello UsuarioProvider Provider');
  }

  cadastrar(credentials: any) {
    let headers = new Headers({      
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    
    let options = new RequestOptions({  headers : headers });
    return this.http.post('http://localhost:8080/login/usuario/save',  credentials);  
  }

}
