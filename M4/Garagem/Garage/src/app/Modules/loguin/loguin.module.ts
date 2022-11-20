import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoguinComponent } from './loguin.component';
import { LoguinRoutingModule } from './loguin-routing.module';
import { CardComponent } from 'src/app/components/card/card.component';

@NgModule({
  declarations: [LoguinComponent, CardComponent],
  imports: [CommonModule, LoguinRoutingModule],
})
export class LoguinModule {}
