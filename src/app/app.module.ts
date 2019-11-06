import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroducaoPageModule } from './../pages/introducao/introducao.module';
import { EstabelecimentosPageModule } from './../pages/estabelecimentos/estabelecimentos.module';
import { LoginPageModule } from './../pages/login/login.module';
import { ContaPageModule } from './../pages/conta/conta.module';
import { CarrinhoPageModule} from './../pages/carrinho/carrinho.module';
import { CardapioPageModule} from './../pages/cardapio/cardapio.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfiguracaoProvider } from '../providers/configuracao/configuracao';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroducaoPageModule,
    EstabelecimentosPageModule,
    LoginPageModule,
    ContaPageModule,
    CarrinhoPageModule,
    CardapioPageModule
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
    ConfiguracaoProvider
  ]
})
export class AppModule {}
