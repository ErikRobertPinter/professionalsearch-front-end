import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitSumsComponent } from './profit-sums.component';

describe('ProfitSumsComponent', () => {
  let component: ProfitSumsComponent;
  let fixture: ComponentFixture<ProfitSumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfitSumsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfitSumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
