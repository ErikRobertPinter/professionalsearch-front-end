import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeletionConfirmationComponent } from './user-deletion-confirmation.component';

describe('UserDeletionConfirmationComponent', () => {
  let component: UserDeletionConfirmationComponent;
  let fixture: ComponentFixture<UserDeletionConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDeletionConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDeletionConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
