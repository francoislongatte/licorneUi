import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartOfStrategyPageComponent } from './heart-of-strategy-page.component';

describe('HeartOfStrategyComponent', () => {
  let component: HeartOfStrategyPageComponent;
  let fixture: ComponentFixture<HeartOfStrategyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartOfStrategyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartOfStrategyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
