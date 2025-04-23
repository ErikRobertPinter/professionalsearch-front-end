import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobQuantityComponent } from './job-quantity.component';

describe('JobQuantityComponent', () => {
  let component: JobQuantityComponent;
  let fixture: ComponentFixture<JobQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobQuantityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
