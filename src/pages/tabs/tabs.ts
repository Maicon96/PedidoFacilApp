import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { CardapioPage } from '../cardapio/cardapio';
import { CarrinhoPage } from '../carrinho/carrinho';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CardapioPage;
  tab3Root = CarrinhoPage;
  tab4Root = LoginPage;

  id: number;
  nome: string;
  status: string;
  entrega: string;

  constructor(public navParams: NavParams) {

    this.id = this.navParams.get("id");
    this.nome = this.navParams.get("nome");
    this.status = this.navParams.get("status");
    this.entrega = this.navParams.get("entrega");

    console.log(this.id);
    console.log(this.nome);
    console.log(this.status);
    console.log(this.entrega);
    
    
  }
  
}
