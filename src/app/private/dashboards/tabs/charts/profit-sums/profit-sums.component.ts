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
  selector: 'app-profit-sums',
  imports: [],
  templateUrl: './profit-sums.component.html',
  styleUrl: './profit-sums.component.scss',
})
export class ProfitSumsComponent implements OnInit, AfterViewInit {
  constructor(private http: HttpClient) {}

  profitSums: number[] = [];
  @ViewChild('ProfitSums') ProfitSums!: ElementRef<HTMLCanvasElement>;

  public chart: Chart | null = null;
  private dataReady = false;
  private chartReady = false;

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
          data: Array(12).fill(0),
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
    const userId = localStorage.getItem('userId');
    const year = new Date().getFullYear();

    this.http
      .get<number[]>(
        `http://localhost:8000/api/monthlyProfits/${userId}/${year}`
      )
      .subscribe({
        next: (response) => {
          this.profitSums = response;
          this.dataReady = true;
          this.updateChartIfReady();
        },
        error: (error) => {
          console.error('Hiba történt a lekérdezés során:', error);
        },
      });
  }

  ngAfterViewInit(): void {
    const canvas = this.ProfitSums?.nativeElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        this.chart = new Chart(ctx, this.config);
        this.chartReady = true;
        this.updateChartIfReady();
      }
    }
  }

  private updateChartIfReady(): void {
    if (this.chartReady && this.dataReady && this.chart) {
      this.chart.data.datasets[0].data = this.profitSums;
      this.chart.update();
    }
  }
}
