import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';


@Injectable()
export class BaresProvider {

  //public basePath = "/cooperapi";
  public baseUrl = "http://localhost:8080/service/estabelecimentos";


  constructor(public http: HttpClient) {
    console.log('Hello BaresProvider Provider');
  }


  public buscarEstabelecimentos() {

    const headers = new Headers({      
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    
    const options = new RequestOptions({  headers : headers });
    
    console.log("maicon - url : " + this.baseUrl + '/load');    
    console.log("maicon - headers : " + headers);    

    return this.http.post(this.baseUrl + '/load',  "")
    //.map(res => { res.json() })
    //.subscribe( data => console.log(data));

  }

}
