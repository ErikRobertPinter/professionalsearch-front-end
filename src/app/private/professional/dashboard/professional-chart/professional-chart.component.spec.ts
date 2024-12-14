import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalChartComponent } from './professional-chart.component';

describe('ProfessionalChartComponent', () => {
  let component: ProfessionalChartComponent;
  let fixture: ComponentFixture<ProfessionalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessionalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
