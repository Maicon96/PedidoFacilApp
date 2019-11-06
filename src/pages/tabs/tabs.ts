import { Component } from '@angular/core';

import { CardapioPage } from '../cardapio/cardapio';
import { CarrinhoPage } from '../carrinho/carrinho';
import { HomePage } from '../home/home';
import { ContaPage } from '../conta/conta'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CardapioPage;
  tab3Root = CarrinhoPage;
  tab4Root = ContaPage;

  constructor() {

  }
  
}
