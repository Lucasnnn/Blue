import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { SwiperModule } from 'swiper/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardComponent, CabecalhoComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    CardComponent,
    CabecalhoComponent,
    SwiperModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ComponentsModule {}
