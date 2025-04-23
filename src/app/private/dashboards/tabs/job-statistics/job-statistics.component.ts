import { HttpClient } from '@angular/common/http';
import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-job-statistics',
  standalone: true,
  templateUrl: './job-statistics.component.html',
  styleUrls: ['./job-statistics.component.scss'],
  imports: [],
})
export class JobStatisticsComponent {
  constructor(private http: HttpClient) {}
  monthlyProfits: number[] = [];
  @ViewChild('ProfitSums') ProfitSums!: ElementRef<HTMLCanvasElement>;

  public chart: any;

  public config: ChartConfiguration<'bar'> = {
    type: 'bar',
    data: {
      labels: [
        'Január',
        'Február',
        'Március',
        'Április',
        'Május',
        'Június',
        'Július',
        'Augusztus',
        'Szeptember',
        'Október',
        'November',
        'December',
      ],
      datasets: [
        {
          label: 'Munkák mennyisége',
          data: [
            this.monthlyProfits[0],
            this.monthlyProfits[1],
            this.monthlyProfits[2],
            this.monthlyProfits[3],
            this.monthlyProfits[4],
            this.monthlyProfits[5],
            this.monthlyProfits[6],
            this.monthlyProfits[7],
            this.monthlyProfits[8],
            this.monthlyProfits[9],
            this.monthlyProfits[10],
            this.monthlyProfits[11],
          ],
          backgroundColor: 'rgba(0, 255, 42, 0.5)',
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  ngOnInit(): void {
    const userId = localStorage.getItem('userId'); // pl. "5"
    const year = new Date().getFullYear(); // pl. 2025
    this.http
      .get<number[]>(
        `http://localhost:8000/api/monthlyProfits/${userId}/${year}`
      )
      .subscribe({
        next: (response) => {
          this.monthlyProfits = response;
          this.chart.data.datasets[0].data = this.monthlyProfits;
          this.chart.update();

          //console.log('Havi statisztikák:', this.datas);
        },
        error: (error) => {
          console.error('Hiba történt a lekérdezés során:', error);
        },
      });
  }
  ngAfterViewInit(): void {
    const canvas = this.ProfitSums.nativeElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        this.chart = new Chart(ctx, this.config);
      } else {
        console.error('Nem található a canvas elem!');
      }
    }
  }
}
