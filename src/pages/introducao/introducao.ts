import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-introducao',
  templateUrl: 'introducao.html',
})
export class IntroducaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  public chamaTelaPrincipal() {
    this.navCtrl.push(TabsPage);
  }

}
