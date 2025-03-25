import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalLayoutComponent } from './professional-layout.component';

describe('ProfessionalLayoutComponent', () => {
  let component: ProfessionalLayoutComponent;
  let fixture: ComponentFixture<ProfessionalLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
