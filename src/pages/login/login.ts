import { CidadeProvider } from './../../providers/cidade/cidade';
import { ContaPage } from './../conta/conta';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { AuthProvider } from './../../providers/auth/auth';
import { CriarContaPage } from './../criar-conta/criar-conta';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EstadoDTO } from '../../models/estado.dto';
import { CidadeDTO } from '../../models/municipio.dto';

//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  //cadastro
  cadastroUsuario: any = {};
  estados: EstadoDTO[];
  cidades: CidadeDTO[];
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

  user: any = {};


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authProvider: AuthProvider, public usuarioProvider: UsuarioProvider, 
    public alertCtrl: AlertController, public storage: Storage,
    platform: Platform, public formBuilder: FormBuilder, public cidadeProvider: CidadeProvider) {
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

    this.storage.get('token').then((val) => {
      if (val != "" && val != null) {
        this.login = false;
        this.conta = true;
      }

      this.login = true;
      this.conta = false;
    });

  }

  updateCidades() {

    console.log("aqqqq");
    
    let estado = this.cadastroUsuario.value.estado;
    this.cidadeProvider.findAll(estado)
      .subscribe(response => {

        console.log("sucessooooo");
        console.log(response);

        //this.cidades = response;
        //this.formGroup.controls.municipio_nasc.setValue(null);
      },
        error => { });
  }

  public entrar() {

    const json = {
      login: this.email,
      senha: this.senha
    };

    
    this.authProvider.login(json).subscribe(
      data => {
        const response = (data as any);
        this.storage.set('token', response.token);
        this.conta = true;
        this.login = false;
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

export class Usuario {
  codigo: number;
  nome: string;
  email: string;
  login: string;
  senha: string;
}