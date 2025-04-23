import { HttpClient } from '@angular/common/http';
import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

// Regisztráljuk az összes Chart.js elemet
Chart.register(...registerables);

@Component({
  selector: 'app-admin-statistics',
  standalone: true,
  imports: [],
  templateUrl: './admin-statistics.component.html',
  styleUrl: './admin-statistics.component.scss',
})
export class AdminStatisticsComponent implements OnInit, AfterViewInit {
  constructor(private http: HttpClient) {}

  userTypes: number[] = [];
  @ViewChild('UserTypes') UserTypes!: ElementRef<HTMLCanvasElement>;
  public chart!: Chart<'polarArea', number[], string>;

  ngOnInit(): void {
    // Lekérés, de csak elmentjük az adatokat, frissítés később történik
    this.http.get<number[]>(`http://localhost:8000/api/usertypes`).subscribe({
      next: (response) => {
        this.userTypes = response;
        this.updateChart();
      },
      error: (error) => {
        console.error('Hiba történt a lekérdezés során:', error);
      },
    });
  }

  ngAfterViewInit(): void {
    const ctx = this.UserTypes.nativeElement.getContext('2d');
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'polarArea',
        data: {
          labels: ['Regular', 'Professional', 'Admin', 'Admin + Professional'],
          datasets: [
            {
              label: 'Felhasználótípusok',
              data: [0, 25, 0.5, 0.3, 0.05], // ideiglenes
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(54, 162, 235)',
              ],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: 'Felhasználók megoszlása',
            },
          },
        },
      });

      this.updateChart();
    }
  }

  private updateChart(): void {
    if (this.chart && this.userTypes.length) {
      this.chart.data.datasets[0].data = this.userTypes;
      this.chart.update();
    }
  }
}
