import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';


@Injectable()
export class BaresProvider {

  public basePath = "/cooperapi";
  public baseUrl = "http://localhost:8080/login/autenticar/usuario";


  constructor(public http: HttpClient) {
    console.log('Hello BaresProvider Provider');
  }


  public buscarProdutos(request: any) {

    const headers = new Headers({      
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    
    const options = new RequestOptions({  headers : headers });
    
    console.log("maicon - url : " + this.baseUrl + '/produtos');    
    console.log("maicon - headers : " + headers);    
    console.log("maicon - json : " + JSON.stringify(request));

    return this.http.post(this.baseUrl + '/produtos',  request)
    //.map(res => { res.json() })
    //.subscribe( data => console.log(data));

  }

}
