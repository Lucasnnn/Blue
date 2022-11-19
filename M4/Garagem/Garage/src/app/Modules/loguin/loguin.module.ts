import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoguinComponent } from './loguin.component';
import { LoguinRoutingModule } from './loguin-routing.module';

@NgModule({
  declarations: [LoguinComponent],
  imports: [CommonModule, LoguinRoutingModule],
})
export class LoguinModule {}
