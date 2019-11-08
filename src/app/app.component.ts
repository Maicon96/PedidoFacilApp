import { CriarContaPage } from './../pages/criar-conta/criar-conta';
import { ConfiguracaoProvider } from './../providers/configuracao/configuracao';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroducaoPage } from './../pages/introducao/introducao';
import { EstabelecimentosPage } from '../pages/estabelecimentos/estabelecimentos';


@Component({
  templateUrl: 'app.html',
  providers: [
    ConfiguracaoProvider
  ]
})
export class MyApp {
  rootPage:any = IntroducaoPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, configuracaoProvider: ConfiguracaoProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      let config = configuracaoProvider.getConfigData();   
      
      if (config == null) {
        this.rootPage = IntroducaoPage;
        configuracaoProvider.setConfigData(false);
      } else {
        this.rootPage = EstabelecimentosPage;
      }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
