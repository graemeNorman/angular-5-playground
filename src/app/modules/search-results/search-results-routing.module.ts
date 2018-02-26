import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Main component */
import { SearchResultsIndexComponent } from './search-results.component';

/* Child Component(s) */
// import { CheckboxContainerComponent } from '../../components/containers/checkbox-container/checkbox-container.component';
// import { DropdownContainerComponent } from '../../components/containers/dropdown-container/dropdown-container.component';
// import { RadioButtonContainerComponent } from '../../components/containers/radio-button-container/radio-button-container.component';
// import { InputBoxComponent } from '../../components/ui/buildingBlocks/input/input.component';
// import { TextAreaComponent } from '../../components/ui/buildingBlocks/textarea/textarea.component';
// import { TabsContainerComponent } from '../../components/ui/buildingBlocks/tabs/tabs-container.component';
// import { ModalContainerComponent } from '../../components/containers/modal-container/modal-container.component';

const searchResultsRoutes: Routes = [
  { path: 'searchResults',  component: SearchResultsIndexComponent,
    // children: [
    //   { path: 'input-box', component: InputBoxComponent },
    //   { path: 'text-area', component: TextAreaComponent },
    //   { path: 'dropdown', component: DropdownContainerComponent },
    //   { path: 'radio-button', component: RadioButtonContainerComponent },
    //   { path: 'checkbox', component: CheckboxContainerComponent },
    //   { path: 'tabs', component: TabsContainerComponent },
    //   { path: 'modals', component: ModalContainerComponent },
    //   { path: '**', redirectTo: '/buildingBlocks' }
    // ]
  }
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
