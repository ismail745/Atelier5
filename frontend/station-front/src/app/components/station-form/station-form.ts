import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StationService } from '../../services/station.service';
import type { Station } from '../../models/models';

@Component({
  selector: 'app-station-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './station-form.html',
  styleUrls: ['./station-form.scss'],
})
export class StationFormComponent implements OnInit {
  form!: FormGroup;

  loading = false;
  saving = false;
  id?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private stationService: StationService
  ) {
    // initialize the reactive form after FormBuilder is injected
    this.form = this.fb.group({
      nom: ['', Validators.required],
      ville: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = Number(idParam);
      this.loadStation(this.id);
    }
  }

  loadStation(id: number) {
    this.loading = true;
    this.stationService.getStation(id).subscribe({
      next: (s) => {
        this.form.patchValue({ nom: s.nom, ville: s.ville });
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load station', err);
        this.loading = false;
      }
    });
  }

  save() {
    if (this.form.invalid) return;
    const payload: Station = { ...this.form.value } as Station;
    this.saving = true;

    const op = this.id ? this.stationService.updateStation(this.id, payload) : this.stationService.createStation(payload);
    op.subscribe({
      next: () => this.router.navigate(['/stations']),
      error: (err) => {
        console.error('Save failed', err);
        this.saving = false;
      }
    });
  }

  cancel() {
    this.router.navigate(['/stations']);
  }
}
