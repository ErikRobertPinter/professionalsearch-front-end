import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularProfileComponent } from './regular-profile.component';

describe('RegularProfileComponent', () => {
  let component: RegularProfileComponent;
  let fixture: ComponentFixture<RegularProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
