import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAddedSuccessfullyComponent } from './job-added-successfully.component';

describe('JobAddedSuccessfullyComponent', () => {
  let component: JobAddedSuccessfullyComponent;
  let fixture: ComponentFixture<JobAddedSuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobAddedSuccessfullyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobAddedSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
