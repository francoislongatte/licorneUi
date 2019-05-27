import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentUniverseComponent } from './investment-universe.component';

describe('Article3Component', () => {
  let component: InvestmentUniverseComponent;
  let fixture: ComponentFixture<InvestmentUniverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentUniverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
