import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareGraphComponent } from './square-graph.component';

describe('SquareGraphComponent', () => {
  let component: SquareGraphComponent;
  let fixture: ComponentFixture<SquareGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
