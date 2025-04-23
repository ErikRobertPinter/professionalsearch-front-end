import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfessionalProfileComponent } from './admin-professional-profile.component';

describe('AdminProfessionalProfileComponent', () => {
  let component: AdminProfessionalProfileComponent;
  let fixture: ComponentFixture<AdminProfessionalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProfessionalProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProfessionalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
