import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Routing
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';

// Services
import { ApiService } from './services/_http/http-service.service';

// Modules
import { pageModules } from './modules/index';

// Other
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...pageModules
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
