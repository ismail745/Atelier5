import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HistoCarbService } from '../../services/histocarb.service';
import { CarburantService } from '../../services/carburant.service';
import type { HistoCarb, Carburant } from '../../models/models';

@Component({
  selector: 'app-histocarb-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './histocarb-form.html',
  styleUrls: ['./histocarb-form.scss']
})
export class HistoCarbFormComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  saving = false;
  stationId?: number;
  id?: number;
  carburants: Carburant[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private histoService: HistoCarbService,
    private carburantService: CarburantService
  ) {
    this.form = this.fb.group({
      date: [new Date().toISOString().slice(0,16), Validators.required],
      prix: [0, Validators.required],
      carburantId: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    const stationParam = this.route.snapshot.paramMap.get('id');
    const editId = this.route.snapshot.paramMap.get('id2') || this.route.snapshot.paramMap.get('id');
    // route structure: stations/:id/historique/new or stations/:id/historique/edit/:id
    const path = this.route.snapshot.url.map(u => u.path).join('/');
    // get station id from first param
    const stationId = this.route.snapshot.paramMap.get('id');
    if (stationId) this.stationId = Number(stationId);

    // attempt to fetch carburants for select
    this.carburantService.getAllCarburants().subscribe({ next: (c) => (this.carburants = c || []) });

    // if editing, extract edit id from url segments
    const segments = this.route.snapshot.url.map(s => s.path);
    const editIndex = segments.indexOf('edit');
    if (editIndex >= 0 && segments.length > editIndex + 1) {
      const editIdStr = segments[editIndex + 1];
      this.id = Number(editIdStr);
      this.load(this.id);
    }
  }

  load(id: number) {
    this.loading = true;
    // no dedicated get by id method in service; reuse getAll and find, or call backend if available.
    this.histoService.getAllHistoCarbs().subscribe({
      next: (data) => {
        const found = data.find(h => h.id === id);
        if (found) {
          this.form.patchValue({
            date: new Date(found.date).toISOString().slice(0,16),
            prix: found.prix,
            carburantId: found.carburant?.id ?? null
          });
        }
        this.loading = false;
      },
      error: (err) => { console.error('Failed to load histo', err); this.loading = false; }
    });
  }

  save() {
    if (this.form.invalid || !this.stationId) return;
    const raw = this.form.value;
    const payload: HistoCarb = {
      date: new Date(raw.date),
      prix: Number(raw.prix),
      station: { id: this.stationId } as any,
      carburant: { id: Number(raw.carburantId) } as any
    } as any;

    this.saving = true;
    this.histoService.createHistoCarb(payload).subscribe({
      next: () => this.router.navigate([`/stations/${this.stationId}/historique`]),
      error: (err) => { console.error('Save failed', err); this.saving = false; }
    });
  }

  cancel() { this.router.navigate([`/stations/${this.stationId}/historique`]); }
}
