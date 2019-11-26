import { ContaPage } from './../conta/conta';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { AuthProvider } from './../../providers/auth/auth';
import { CriarContaPage } from './../criar-conta/criar-conta';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //cadastro
  cadastroUsuario: any = {};
  nomeCompleto: string;
  cpf: string;
  email: string;
  senha: string;  
  rua: string;
  numero: number;
  bairro: string;
  cep: number;
  cidade: string;
  estado: string;
  complemento: string;


  //login
  emailLogar: string;
  senhaLogar: string;
  login = true;
  conta = false;
  cadastrar = false;

  segment: string = "login";
  isAndroid: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public authProvider: AuthProvider, public usuarioProvider: UsuarioProvider, public alertCtrl: AlertController, public storage: Storage, 
    platform: Platform, public formBuilder: FormBuilder) {
      this.isAndroid = platform.is('android');

      this.cadastroUsuario = this.formBuilder.group({
        nomeCompleto: ['', Validators.required],
        cpf: ['', Validators.required],
        email: ['', Validators.required],
        senha: ['', Validators.required],
        rua: [''],
        numero: [''],
        bairro: [''],
        cep: [''],
        cidade: [''],
        estado: [''],
        complemento: ['']
      });
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
  }

  public chamaTelaCriarConta() {
    this.navCtrl.push(CriarContaPage);
  }

  salvarUsuario() {    

    let endereco;

    if (this.rua != null && this.rua != "") {
      endereco = {
        rua: this.cadastroUsuario.value.rua,
        numero: this.cadastroUsuario.value.numero,
        bairro: this.cadastroUsuario.value.bairro,
        cep: this.cadastroUsuario.value.cep,
        cidade: this.cadastroUsuario.value.cidade,
        estado: this.cadastroUsuario.value.estado,
        complemento: this.cadastroUsuario.value.complemento
      }
    }

    const json = {
      registro: {
        nomeCompleto: this.cadastroUsuario.value.nomeCompleto,
        cpf: this.cadastroUsuario.value.cpf,
        email: this.cadastroUsuario.value.email,
        senha: this.cadastroUsuario.value.senha,
        endereco: endereco        
      }      
    };

    console.log("aqq");
    console.log(json);

    this.usuarioProvider.cadastrar(json).subscribe(
      data => {
        const response = (data as any);
        console.log(response);
        
        const alert = this.alertCtrl.create({
          title: 'Sucesso!',
          subTitle: response.msg,
          buttons: ['OK']
        });
        alert.present();    

        this.navCtrl.push(ContaPage);

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
  

}
