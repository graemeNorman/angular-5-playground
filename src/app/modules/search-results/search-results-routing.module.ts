import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Main component */
import { SearchResultsIndexComponent } from './search-results.component';

const searchResultsRoutes: Routes = [
  { path: 'searchResults',  component: SearchResultsIndexComponent, }
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
