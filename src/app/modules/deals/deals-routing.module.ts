import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Main component */
import { SearchResultsIndexComponent } from './search-results.component';
import { DealsPageSmartComponent } from '../../components/deals-page/deals-page.smart-component';

const searchResultsRoutes: Routes = [
  { path: 'searchResults',  component: SearchResultsIndexComponent, },
  { path: 'searchResults/:dealId', component: DealsPageSmartComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(searchResultsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class SearchResultsRoutingModule { }
