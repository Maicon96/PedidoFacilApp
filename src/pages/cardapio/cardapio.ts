import { CarrinhoProdutoPage } from './../carrinho-produto/carrinho-produto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
})
export class CardapioPage {

  items = [
    'Lanches',
    'Pizzas',
    'Bebidas',
    'Promoções',
    'Combos',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioPage');
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);

    this.navCtrl.push(CarrinhoProdutoPage);
  }

}
