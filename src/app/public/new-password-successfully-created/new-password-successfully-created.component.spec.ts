import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPasswordSuccessfullyCreatedComponent } from './new-password-successfully-created.component';

describe('NewPasswordSuccessfullyCreatedComponent', () => {
  let component: NewPasswordSuccessfullyCreatedComponent;
  let fixture: ComponentFixture<NewPasswordSuccessfullyCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPasswordSuccessfullyCreatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPasswordSuccessfullyCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
