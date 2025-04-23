import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalParamsService {
  constructor(private http: HttpClient) {}

  getResults(settlement: string, profession: string) {
    const params = new HttpParams()
      .set('settlement', settlement)
      .set('profession', profession);

    return this.http.get<any[]>('http://127.0.0.1:8000/api/skills', { params });
  }
}
