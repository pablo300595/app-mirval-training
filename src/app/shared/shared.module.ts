import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PresentationCardComponent } from './components/presentation-card/presentation-card.component';


@NgModule({
  declarations: [
    PresentationCardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    PresentationCardComponent
  ]
})
export class SharedModule { }
