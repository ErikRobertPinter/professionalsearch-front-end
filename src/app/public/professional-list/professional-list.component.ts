import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessionalParamsServiceService } from '../../@shared/professional-params-service.service';

interface Professional {
  surname: string;
  firstname: string;
}

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.component.html',
  styleUrls: ['./professional-list.component.scss'],
})
export class ProfessionalListComponent {
  professionals: Professional[] = [];

  constructor(
    private route: ActivatedRoute,
    private professionalService: ProfessionalParamsServiceService
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
