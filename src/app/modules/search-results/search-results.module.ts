import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsIndexComponent } from './search-results.component';
import { SearchResultsRoutingModule } from './search-results-routing.module';

/* Container Components */
// import { containerComponents } from '../../components/containers/index';

/* UI Components */
// import { uiComponents } from '../../components/ui/index';

/* Libraries */
// import { TabsModule, ModalModule, BsDropdownModule } from 'ngx-bootstrap';

// import { GlobalSharedModule } from '../../shared/global.shared.module';

@NgModule({
  imports: [
    SearchResultsRoutingModule,
    CommonModule,
  ],
  declarations: [
    SearchResultsIndexComponent,
    // ...containerComponents,
    // ...uiComponents,
  ],
  exports: [ // For NPM module creation please specify components which are associated with this module!
    SearchResultsIndexComponent,
    // ...containerComponents,
    // ...uiComponents
  ]
})

export class SearchResultsModule {}

