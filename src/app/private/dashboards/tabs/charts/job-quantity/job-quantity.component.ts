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
  selector: 'app-job-quantity',
  imports: [],
  templateUrl: './job-quantity.component.html',
  styleUrl: './job-quantity.component.scss',
})
export class JobQuantityComponent implements OnInit, AfterViewInit {
  constructor(private http: HttpClient) {}
  jobQuantities: number[] = [];
  @ViewChild('JobQuantity') JobQuantity!: ElementRef<HTMLCanvasElement>;

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
            this.jobQuantities[0],
            this.jobQuantities[1],
            this.jobQuantities[2],
            this.jobQuantities[3],
            this.jobQuantities[4],
            this.jobQuantities[5],
            this.jobQuantities[6],
            this.jobQuantities[7],
            this.jobQuantities[8],
            this.jobQuantities[9],
            this.jobQuantities[10],
            this.jobQuantities[11],
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
    const userId = localStorage.getItem('userId');
    const year = new Date().getFullYear();
    this.http
      .get<number[]>(
        `http://localhost:8000/api/jobstatistics/${userId}/${year}`
      )
      .subscribe({
        next: (response) => {
          this.jobQuantities = response;
          this.chart.data.datasets[0].data = this.jobQuantities;
          this.chart.update();
        },
        error: (error) => {
          console.error('Hiba történt a lekérdezés során:', error);
        },
      });
  }
  ngAfterViewInit(): void {
    const canvas = this.JobQuantity.nativeElement;
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
