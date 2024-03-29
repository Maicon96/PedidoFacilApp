import { TabsPage } from './../tabs/tabs';
import { CardapioPage } from './../cardapio/cardapio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
  }

  public chamaTelaCardapio() {
    this.navCtrl.push(CardapioPage);
    //this.navCtrl.parent.select(2);
  }

}
