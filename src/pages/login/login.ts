import { EstadoService } from './../../providers/estado/estado';
import { CidadeProvider } from './../../providers/cidade/cidade';
import { ContaPage } from './../conta/conta';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { AuthProvider } from './../../providers/auth/auth';
import { CriarContaPage } from './../criar-conta/criar-conta';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';

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
  confirmarSenha: string;
  senhaDiferente = false;

  localizacaoAtual = false;
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
    platform: Platform, public formBuilder: FormBuilder, public cidadeProvider: CidadeProvider,
    public estadoService: EstadoService, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {
    this.isAndroid = platform.is('android');

    this.cadastroUsuario = this.formBuilder.group({
      nomeCompleto: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      //confirmarSenha: ['', Validators.required],
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

  
    this.estadoService.findAll()
      .subscribe(response => {
        this.estados = response;
        this.cadastroUsuario.controls.estado.setValue(this.estados[0].id);
        this.updateCidades();
      },
        error => { });
    
   
  }

  pegarLocalizacaoAtual(event: any) {
    console.log(event.checked);

    const options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
  };

    if (event.checked == true) {
      this.geolocation.getCurrentPosition().then((resp) => {
        this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
          .then((result: NativeGeocoderReverseResult[]) => {
            console.log(JSON.stringify(result[0])) 


            // setar os valores do endereço

            this.cep = 1125454;
         })
          //.catch((error: any) => console.log(error));
          .catch((error: any) => {

            const alert = this.alertCtrl.create({
              title: 'Erro!',
              subTitle: "Falha ao buscar endereço atual",
              buttons: ['OK']
            });
            alert.present();
  
          });

        
        }).catch((error) => {
          const alert = this.alertCtrl.create({
            title: 'Erro!',
            subTitle: error.message,
            buttons: ['OK']
          });
          alert.present();

        });
        
        /*let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
          console.log(data);
        });*/   
    }

  }

  updateCidades() {    

    console.log("aq");

    let estado = this.cadastroUsuario.value.estado;
    this.cidadeProvider.findAll(estado)
      .subscribe(response => {
        console.log(response);
        this.cidades = response;
      },
        error => { console.log(error) });
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

    console.log(this.senha);
    console.log(this.confirmarSenha);

    /*if (this.senha != this.confirmarSenha) {
      this.senhaDiferente = true;
     
      const alert = this.alertCtrl.create({
        title: 'Atenção!',
        subTitle: 'Senhas não conferem',
        buttons: ['OK']
      });
      alert.present();
    }*/

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
          //subTitle: response.msg,
          subTitle: "Sucesso ao cadastrar conta!",
          buttons: ['OK']
        });
        alert.present();

        this.navCtrl.push(ContaPage);

      }, error => {
        const response = (error as any);
        console.log(response);
        const alert = this.alertCtrl.create({
          title: 'Atenção!',
          //subTitle: response.error.msg,
          subTitle: "Erro ao cadastrar conta!",
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