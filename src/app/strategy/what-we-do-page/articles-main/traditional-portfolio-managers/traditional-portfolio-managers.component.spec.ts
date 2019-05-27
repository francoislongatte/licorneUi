import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalPortfolioManagersComponent } from './traditional-portfolio-managers.component';

describe('Article1Component', () => {
  let component: TraditionalPortfolioManagersComponent;
  let fixture: ComponentFixture<TraditionalPortfolioManagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraditionalPortfolioManagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraditionalPortfolioManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
