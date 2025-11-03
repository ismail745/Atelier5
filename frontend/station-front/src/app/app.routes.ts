import { Routes } from '@angular/router';
import { StationListComponent } from './components/station-list/station-list';
import { StationFormComponent } from './components/station-form/station-form';
import { CarburantListComponent } from './components/carburant-list/carburant-list';
import { CarburantFormComponent } from './components/carburant-form/carburant-form';
import { HistoCarbListComponent } from './components/histocarb-list/histocarb-list';
import { HistoCarbFormComponent } from './components/histocarb-form/histocarb-form';

export const routes: Routes = [
  { path: '', redirectTo: 'stations', pathMatch: 'full' },
  { path: 'stations', component: StationListComponent },
  { path: 'stations/new', component: StationFormComponent },
  { path: 'stations/edit/:id', component: StationFormComponent },
  { path: 'carburants', component: CarburantListComponent },
  { path: 'carburants/new', component: CarburantFormComponent },
  { path: 'carburants/edit/:id', component: CarburantFormComponent },
  { path: 'stations/:id/historique', component: HistoCarbListComponent },
  { path: 'historique', component: HistoCarbListComponent }
  ,{ path: 'stations/:id/historique/new', component: HistoCarbFormComponent }
  ,{ path: 'stations/:id/historique/edit/:id', component: HistoCarbFormComponent }
];
