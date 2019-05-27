import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartOfStrategyComponent } from './heart-of-strategy.component';

describe('Article2Component', () => {
  let component: HeartOfStrategyComponent;
  let fixture: ComponentFixture<HeartOfStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartOfStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartOfStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
