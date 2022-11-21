import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoguinComponent } from './loguin.component';
import { LoguinRoutingModule } from './loguin-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [LoguinComponent],
  imports: [CommonModule, LoguinRoutingModule, ComponentsModule],
})
export class LoguinModule {}
