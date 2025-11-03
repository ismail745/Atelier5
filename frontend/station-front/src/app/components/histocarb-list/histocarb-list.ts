import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { HistoCarbService } from '../../services/histocarb.service';
import type { HistoCarb } from '../../models/models';

@Component({
  selector: 'app-histocarb-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './histocarb-list.html',
  styleUrls: ['./histocarb-list.scss']
})
export class HistoCarbListComponent implements OnInit {
  histos: HistoCarb[] = [];
  loading = false;
  stationId?: number;

  constructor(
    private histoService: HistoCarbService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.stationId = Number(idParam);
      this.loadForStation(this.stationId);
    } else {
      this.loadAll();
    }
  }

  loadForStation(stationId: number) {
    this.loading = true;
    this.histoService.getHistoCarbsByStation(stationId).subscribe({
      next: (data) => (this.histos = data || []),
      error: (err) => console.error('Failed to load histo carbs', err),
      complete: () => (this.loading = false)
    });
  }

  loadAll() {
    this.loading = true;
    this.histoService.getAllHistoCarbs().subscribe({
      next: (data) => (this.histos = data || []),
      error: (err) => console.error('Failed to load histo carbs', err),
      complete: () => (this.loading = false)
    });
  }

  deleteHisto(id?: number) {
    if (id == null) return;
    if (!confirm('Confirmez la suppression de l\'entrée historique ?')) return;
    this.histoService.deleteHistoCarb(id).subscribe({
      next: () => (this.histos = this.histos.filter(h => h.id !== id)),
      error: (err) => console.error('Failed to delete histo', err)
    });
  }
}

