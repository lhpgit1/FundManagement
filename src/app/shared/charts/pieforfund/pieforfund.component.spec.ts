import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieforfundComponent } from './pieforfund.component';

describe('PieforfundComponent', () => {
  let component: PieforfundComponent;
  let fixture: ComponentFixture<PieforfundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieforfundComponent]
    });
    fixture = TestBed.createComponent(PieforfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
