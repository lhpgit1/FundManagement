import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscationtableComponent } from './transcationtable.component';

describe('TranscationtableComponent', () => {
  let component: TranscationtableComponent;
  let fixture: ComponentFixture<TranscationtableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranscationtableComponent]
    });
    fixture = TestBed.createComponent(TranscationtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
