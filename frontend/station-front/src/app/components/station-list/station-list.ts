import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StationService } from '../../services/station.service';

import type { Station } from '../../models/models';

@Component({
  selector: 'app-station-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './station-list.html',
  styleUrls: ['./station-list.scss'],
})
export class StationListComponent {
  stations: Station[] = [];
  loading = false;

  constructor(private stationService: StationService) {}

  ngOnInit(): void {
    this.loadStations();
  }

  loadStations(): void {
    this.loading = true;
    this.stationService.getAllStations().subscribe({
      next: (data) => (this.stations = data || []),
      error: (err) => console.error('Failed to load stations', err),
      complete: () => (this.loading = false)
    });
  }

  deleteStation(id?: number) {
    if (id == null) {
      console.warn('deleteStation called without an id');
      return;
    }

    if (!confirm('Confirmez la suppression de la station ?')) {
      return;
    }

    this.stationService.deleteStation(id).subscribe({
      next: () => {
        // remove locally for immediate feedback
        this.stations = this.stations.filter((s) => s.id !== id);
      },
      error: (err) => console.error('Failed to delete station', err)
    });
  }
}
