import { Component } from '@angular/core';
import { TabsPage } from './../tabs/tabs';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-estabelecimentos',
  templateUrl: 'estabelecimentos.html',
})
export class EstabelecimentosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstabelecimentosPage');
  }

  public chamaTelaPedido() {
    //vai para a pagina de tabs que é o meu home
    this.navCtrl.push(TabsPage);
    //this.navCtrl.push(TabsPage);
  }

  
}
