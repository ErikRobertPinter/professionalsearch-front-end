import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyjobComponent } from './myjob.component';

describe('MyjobComponent', () => {
  let component: MyjobComponent;
  let fixture: ComponentFixture<MyjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyjobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
