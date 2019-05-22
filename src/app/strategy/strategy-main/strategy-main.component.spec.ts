import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyMainComponent } from './strategy-main.component';

describe('StrategyMainComponent', () => {
  let component: StrategyMainComponent;
  let fixture: ComponentFixture<StrategyMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategyMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
