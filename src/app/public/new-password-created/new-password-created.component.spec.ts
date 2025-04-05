import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPasswordCreatedComponent } from './new-password-created.component';

describe('NewPasswordCreatedComponent', () => {
  let component: NewPasswordCreatedComponent;
  let fixture: ComponentFixture<NewPasswordCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPasswordCreatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPasswordCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
