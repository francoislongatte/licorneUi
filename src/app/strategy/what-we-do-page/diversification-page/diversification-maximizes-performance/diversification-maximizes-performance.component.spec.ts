import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversificationMaximizesPerformanceComponent } from './diversification-maximizes-performance.component';

describe('DiversificationMaximizesPerformanceComponent', () => {
  let component: DiversificationMaximizesPerformanceComponent;
  let fixture: ComponentFixture<DiversificationMaximizesPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversificationMaximizesPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversificationMaximizesPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
