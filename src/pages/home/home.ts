import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  produtoDigitado: string;
  produtos = new Array<any>();




  constructor(public navCtrl: NavController) {
    
    this.produtos.push(
      {
        nome: 'Combo X'
      }, 
      {
        nome: 'Batata frita'
      }, 
      {
        nome: 'Combo Burguer + Batata'
      },
      {
        nome: 'Combo Burguer + Batata'
      },
      {
        nome: 'Combo Burguer + Batata'
      },
      {
        nome: 'Combo Burguer + Batata'
      },
      {
        nome: 'Combo Burguer + Batata'
      }
    );



  }

}
