
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CarburantService } from '../../services/carburant.service';
import type { Carburant } from '../../models/models';

@Component({
  selector: 'app-carburant-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './carburant-form.html',
  styleUrls: ['./carburant-form.scss'],
})
export class CarburantFormComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  saving = false;
  id?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private carburantService: CarburantService
  ) {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      description: [''],
      adresse: ['']
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = Number(idParam);
      this.loadCarburant(this.id);
    }
  }

  loadCarburant(id: number) {
    this.loading = true;
    this.carburantService.getCarburant(id).subscribe({
      next: (c) => {
        this.form.patchValue({ nom: c.nom, description: c.description, adresse: c.adresse });
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load carburant', err);
        this.loading = false;
      }
    });
  }

  save() {
    if (this.form.invalid) return;
    const payload: Carburant = { ...this.form.value } as Carburant;
    this.saving = true;
    const op = this.id ? this.carburantService.updateCarburant(this.id, payload) : this.carburantService.createCarburant(payload);
    op.subscribe({
      next: () => this.router.navigate(['/carburants']),
      error: (err) => {
        console.error('Save failed', err);
        this.saving = false;
      }
    });
  }

  cancel() {
    this.router.navigate(['/carburants']);
  }
}
