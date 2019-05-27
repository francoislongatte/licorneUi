import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsUniversalTimelessPhenomenonComponent } from './trends-universal-timeless-phenomenon.component';

describe('TrendsUniversalTimelessPhenomenonComponent', () => {
  let component: TrendsUniversalTimelessPhenomenonComponent;
  let fixture: ComponentFixture<TrendsUniversalTimelessPhenomenonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendsUniversalTimelessPhenomenonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsUniversalTimelessPhenomenonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
