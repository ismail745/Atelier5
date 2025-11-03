import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarburantService } from '../../services/carburant.service';
import type { Carburant } from '../../models/models';

@Component({
  selector: 'app-carburant-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carburant-list.html',
  styleUrls: ['./carburant-list.scss'],
})
export class CarburantListComponent implements OnInit {
  carburants: Carburant[] = [];
  loading = false;

  constructor(private carburantService: CarburantService) {}

  ngOnInit(): void {
    this.loadCarburants();
  }

  loadCarburants(): void {
    this.loading = true;
    this.carburantService.getAllCarburants().subscribe({
      next: (data) => (this.carburants = data || []),
      error: (err) => console.error('Failed to load carburants', err),
      complete: () => (this.loading = false)
    });
  }

  deleteCarburant(id?: number) {
    if (id == null) {
      console.warn('deleteCarburant called without an id');
      return;
    }
    if (!confirm('Confirmez la suppression du carburant ?')) return;
    this.carburantService.deleteCarburant(id).subscribe({
      next: () => (this.carburants = this.carburants.filter((c) => c.id !== id)),
      error: (err) => console.error('Failed to delete carburant', err)
    });
  }
}
