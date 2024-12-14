import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDeletionQuestionDialogComponent } from './item-deletion-question-dialog.component';

describe('ItemDeletionQuestionDialogComponent', () => {
  let component: ItemDeletionQuestionDialogComponent;
  let fixture: ComponentFixture<ItemDeletionQuestionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDeletionQuestionDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemDeletionQuestionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
