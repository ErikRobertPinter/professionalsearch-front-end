import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProfessionComponent } from './add-new-profession.component';

describe('AddNewProfessionComponent', () => {
  let component: AddNewProfessionComponent;
  let fixture: ComponentFixture<AddNewProfessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewProfessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
