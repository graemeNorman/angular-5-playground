import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IntroComponent } from './intro.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    IntroComponent
  ]
})

export class HomeModule { }
