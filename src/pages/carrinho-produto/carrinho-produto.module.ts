import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarrinhoProdutoPage } from './carrinho-produto';

@NgModule({
  declarations: [
    CarrinhoProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(CarrinhoProdutoPage),
  ],
})
export class CarrinhoProdutoPageModule {}
