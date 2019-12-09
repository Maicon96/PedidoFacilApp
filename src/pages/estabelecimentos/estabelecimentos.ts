import { BaresProvider } from './../../providers/bares/bares';
import { UtilsProvider } from './../../providers/utils/utils';
import { Component } from '@angular/core';
import { TabsPage } from './../tabs/tabs';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-estabelecimentos',
  templateUrl: 'estabelecimentos.html',
})
export class EstabelecimentosPage {

  //produtoDigitado: string;
  id: number;
  nome: number;
  cnpj: string;
  imagem: any;
  mediaQualificacao: number;
  bares = new Array<any>();
  barDigitado: string;
  conexao = true;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public baresProvider: BaresProvider,
    public utilsProvider: UtilsProvider, public loadingCtr: LoadingController, 
    public alertCtrl: AlertController) {

      this.mediaQualificacao = 4.7;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstabelecimentosPage');

    this.listarBares();
  }

  public chamaTelaPedido() {
    //vai para a pagina de tabs que é o meu home
    this.navCtrl.push(TabsPage);
    //this.navCtrl.push(TabsPage);
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.listarBares();
      refresher.complete();
    }, 1000);
  }

  public listarBares() {

    this.utilsProvider.verificaConexao(this.conexao);

    if (this.conexao) {
      this.showLoader();

      this.baresProvider.buscarEstabelecimentos().subscribe(
        data => {
          const res = (data as any);    
          
          console.log(res);

          this.bares = res.registros;          
          this.loading.dismiss();
        }, error => {
          this.loading.dismiss();

          const alert = this.alertCtrl.create({
            title: 'Atenção!',
            subTitle: 'Ocorreu um erro ao buscar os estabelecimentos, tente novamente.',
            buttons: ['OK']
          });
          alert.present();

          console.log("maicon - erro" + error);
          console.log(error);
        })
    } else {
      const alert = this.alertCtrl.create({
        title: 'Você não possui Internet!',
        subTitle: 'Conecte-se em alguma rede e tente novamente.',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  showLoader() {
    this.loading = this.loadingCtr.create({
      spinner: 'bubbles',
      content: 'Buscando Bares...'
    })

    this.loading.present();
  }
  
}
