import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliotableComponent } from './portfoliotable.component';

describe('PortfoliotableComponent', () => {
  let component: PortfoliotableComponent;
  let fixture: ComponentFixture<PortfoliotableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfoliotableComponent]
    });
    fixture = TestBed.createComponent(PortfoliotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
