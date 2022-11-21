import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListagemRoutingModule } from './listagem-routing.module';
import { ListagemComponent } from './listagem.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [ListagemComponent],
  imports: [CommonModule, ListagemRoutingModule, ComponentsModule],
})
export class ListagemModule {}
