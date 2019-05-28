import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversificationReducesRiskComponent } from './diversification-reduces-risk.component';

describe('DiversificationReducesRiskComponent', () => {
  let component: DiversificationReducesRiskComponent;
  let fixture: ComponentFixture<DiversificationReducesRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversificationReducesRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversificationReducesRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
