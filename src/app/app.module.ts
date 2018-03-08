// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routing
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';

// Services
import { ApiService } from './services/_http/http-service.service';

// Modules
import { pageModules } from './modules/index';

// Other
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Redux & Store
import { NgReduxModule } from '@angular-redux/store';
import { StoreModule } from './store/store.module';

// Components
import { AppComponent } from './app.component';
// import { TodoOverviewComponent } from './components/todo-overview/todo-overview.component';
// import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent
    // TodoOverviewComponent,
    // TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ...pageModules,
    // Store / Redux
    NgReduxModule,
    StoreModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
