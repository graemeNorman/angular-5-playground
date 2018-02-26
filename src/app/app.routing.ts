import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent} from './modules/intro/intro.component';

const appRoutes: Routes = [
  { path: '', component: IntroComponent },
  // {
  //   path: 'buildingBlocks', component: ResultsComponent,
    // children: [
    //   {path: 'url-path', component: Component-Name-Here}
    // ]
  // },
  { path: '**', redirectTo: '' }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
