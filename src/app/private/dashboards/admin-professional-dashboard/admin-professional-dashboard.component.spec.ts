import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfessionalDashboardComponent } from './admin-professional-dashboard.component';

describe('AdminProfessionalDashboardComponent', () => {
  let component: AdminProfessionalDashboardComponent;
  let fixture: ComponentFixture<AdminProfessionalDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProfessionalDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProfessionalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
