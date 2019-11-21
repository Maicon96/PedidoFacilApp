import { CriarContaPage } from './../criar-conta/criar-conta';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from './../login/login';

@IonicPage()
@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html',
})
export class ContaPage {

  login = true;
  cadastrar = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }  


  ionViewDidLoad() {
    console.log('ionViewDidLoad ContaPage');
  }

  public chamaTelaLogin() {
    this.navCtrl.push(LoginPage);
  }

  public chamaTelaCriarConta() {
    this.navCtrl.push(CriarContaPage);
  }

}
