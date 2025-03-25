import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSignupFormComponent } from './professional-signup-form.component';

describe('ProfessionalSignupFormComponent', () => {
  let component: ProfessionalSignupFormComponent;
  let fixture: ComponentFixture<ProfessionalSignupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalSignupFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalSignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
