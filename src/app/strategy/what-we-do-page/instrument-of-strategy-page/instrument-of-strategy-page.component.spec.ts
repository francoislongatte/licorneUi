import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentOfStrategyPageComponent } from './instrument-of-strategy-page.component';

describe('InstrumentOfStrategyPageComponent', () => {
  let component: InstrumentOfStrategyPageComponent;
  let fixture: ComponentFixture<InstrumentOfStrategyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentOfStrategyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentOfStrategyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
