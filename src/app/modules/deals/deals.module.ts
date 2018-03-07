import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsIndexComponent } from './deals.component';
import { SearchResultsRoutingModule } from './deals-routing.module';
import { DealsPageSmartComponent } from '../../components/deals-page/deals-page.smart-component';

@NgModule({
  imports: [
    SearchResultsRoutingModule,
    CommonModule,
  ],
  declarations: [
    SearchResultsIndexComponent,
    DealsPageSmartComponent
  ],
  exports: [
    SearchResultsIndexComponent,
  ]
})

export class DealsModule {}

