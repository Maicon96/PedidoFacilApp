import { Geolocation } from '@ionic-native/geolocation';
import { CarrinhoProdutoPageModule } from './../pages/carrinho-produto/carrinho-produto.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
//import { Facebook } from '@ionic-native/facebook/ngx';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { Network } from '@ionic-native/network';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroducaoPageModule } from './../pages/introducao/introducao.module';
import { EstabelecimentosPageModule } from './../pages/estabelecimentos/estabelecimentos.module';
import { LoginPageModule } from './../pages/login/login.module';
import { ContaPageModule } from './../pages/conta/conta.module';
import { CarrinhoPageModule} from './../pages/carrinho/carrinho.module';
import { CardapioPageModule} from './../pages/cardapio/cardapio.module';
import { CriarContaPageModule } from './../pages/criar-conta/criar-conta.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfiguracaoProvider } from '../providers/configuracao/configuracao';
import { BaresProvider } from '../providers/bares/bares';
import { CardapioProvider } from '../providers/cardapio/cardapio';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { PedidoProvider } from '../providers/pedido/pedido';
import { AuthProvider } from '../providers/auth/auth';
import { CidadeProvider } from '../providers/cidade/cidade';
import { EstadoService } from '../providers/estado/estado';
import { UtilsProvider } from '../providers/utils/utils';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({ name: 'pedido-facil'}),
    IntroducaoPageModule,
    EstabelecimentosPageModule,
    LoginPageModule,
    ContaPageModule,
    CarrinhoPageModule,
    CardapioPageModule,
    CriarContaPageModule,
    CarrinhoProdutoPageModule,
    HttpModule,
    HttpClientModule,
    BrMaskerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfiguracaoProvider,
    BaresProvider,
    CardapioProvider,
    UsuarioProvider,
    PedidoProvider,
    AuthProvider,
    //Facebook,
    CidadeProvider,
    EstadoService,
    Geolocation,
    NativeGeocoder,
    UtilsProvider,
    Network
  ]
})
export class AppModule {}
