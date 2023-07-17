import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiefortransComponent } from './piefortrans.component';

describe('PiefortransComponent', () => {
  let component: PiefortransComponent;
  let fixture: ComponentFixture<PiefortransComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiefortransComponent]
    });
    fixture = TestBed.createComponent(PiefortransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
