import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalParamsServiceService {
  constructor(private http: HttpClient) {}

  getResults(settlement: string, profession: string) {
    const params = new HttpParams()
      .set('settlement', settlement)
      .set('profession', profession);

    return this.http.get<any[]>('http://127.0.0.1:8000/api/skills', { params });
  }
}
