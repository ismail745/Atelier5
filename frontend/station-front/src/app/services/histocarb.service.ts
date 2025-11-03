import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoCarb } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class HistoCarbService {
  private apiUrl = 'http://localhost:8080/api/histocarbs';

  constructor(private http: HttpClient) { }

  getAllHistoCarbs(): Observable<HistoCarb[]> {
    return this.http.get<HistoCarb[]>(this.apiUrl);
  }

  getHistoCarbsByStation(stationId: number): Observable<HistoCarb[]> {
    return this.http.get<HistoCarb[]>(`${this.apiUrl}/station/${stationId}`);
  }

  getLatestPricesByStation(stationId: number): Observable<HistoCarb[]> {
    return this.http.get<HistoCarb[]>(`${this.apiUrl}/station/${stationId}/latest`);
  }

  createHistoCarb(histoCarb: HistoCarb): Observable<HistoCarb> {
    return this.http.post<HistoCarb>(this.apiUrl, histoCarb);
  }

  deleteHistoCarb(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}