import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentOfStrategyComponent } from './instrument-of-strategy.component';

describe('Article5Component', () => {
  let component: InstrumentOfStrategyComponent;
  let fixture: ComponentFixture<InstrumentOfStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentOfStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentOfStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
