import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManzanaComponent } from './manzana/manzana.component';
import { NaranjaComponent } from './naranja/naranja.component';
import { SandiaComponent } from './sandia/sandia.component';

@NgModule({
  declarations: [
    AppComponent,
    ManzanaComponent,
    NaranjaComponent,
    SandiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
