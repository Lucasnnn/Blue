import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';

@NgModule({
  declarations: [AppComponent, CabecalhoComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
