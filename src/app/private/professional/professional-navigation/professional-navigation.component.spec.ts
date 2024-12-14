import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalNavigationComponent } from './professional-navigation.component';

describe('ProfessionalNavigationComponent', () => {
  let component: ProfessionalNavigationComponent;
  let fixture: ComponentFixture<ProfessionalNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessionalNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
