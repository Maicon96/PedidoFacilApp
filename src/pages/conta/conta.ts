import { AuthProvider } from './../../providers/auth/auth';
import { CriarContaPage } from './../criar-conta/criar-conta';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from './../login/login';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html',
})
export class ContaPage {

  email: string;
  senha: string;
  login = true;
  cadastrar = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public authProvider: AuthProvider, public alertCtrl: AlertController, public storage: Storage) {

  }  


  ionViewDidLoad() {
    console.log('ionViewDidLoad ContaPage');
  }

  public entrar() {

    const json = {
      login: this.email,
      senha: this.senha
    };

    this.authProvider.login(json).subscribe(
      data => {
        const response = (data as any);
        console.log(response);
        console.log(response.token);
        this.storage.set('token', response.token);
      }, error => {
        const response = (error as any);
        console.log(response);
        const alert = this.alertCtrl.create({
          title: 'Atenção!',
          subTitle: response.error.msg,
          buttons: ['OK']
        });
        alert.present();       

      })
  }

  public chamaTelaLogin() {
    this.navCtrl.push(LoginPage);
  }

  public chamaTelaCriarConta() {
    this.navCtrl.push(CriarContaPage);
  }

  public montarJsons() {

    return {
      login: "maicon",
      senha: "123"
    }
  }

}
