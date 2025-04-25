import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessionalParamsService } from '../../@shared/professional-params.service';

interface Professional {
  surname: string;
  firstname: string;
}

@Component({
  selector: 'app-professional-list',
  standalone: true,
  imports: [],
  templateUrl: './professional-list.component.html',
  styleUrl: './professional-list.component.scss',
})
export class ProfessionalListComponent {
  professionals: Professional[] = [];

  constructor(
    private route: ActivatedRoute,
    private professionalService: ProfessionalParamsService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const settlement = params['settlement'];
      const profession = params['profession'];

      this.professionalService.getResults(settlement, profession).subscribe(
        (data) => {
          this.professionals = data;
          console.log(this.professionals);
        },

        (error) => {
          console.error('Hiba történt a kéréssel:', error);
          alert('Hiba történt: ' + error.message);
        }
      );
    });
  }
}
