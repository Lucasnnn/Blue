import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { SwiperModule } from 'swiper/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormVeiculoComponent } from './form-veiculo/form-veiculo.component';

@NgModule({
  declarations: [CardComponent, CabecalhoComponent, FormVeiculoComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    CardComponent,
    CabecalhoComponent,
    SwiperModule,
    ReactiveFormsModule,
    FormsModule,
    FormVeiculoComponent,
  ],
})
export class ComponentsModule {}
