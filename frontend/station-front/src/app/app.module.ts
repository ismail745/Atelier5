import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// router is configured via app.config (provideRouter)

import { StationListComponent } from './components/station-list/station-list';
import { StationFormComponent } from './components/station-form/station-form';
import { CarburantListComponent } from './components/carburant-list/carburant-list';
import { CarburantFormComponent } from './components/carburant-form/carburant-form';
import { HistoCarbListComponent } from './components/histocarb-list/histocarb-list';

// routes are provided via `app.config` using provideRouter(routes)

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AppModule { }