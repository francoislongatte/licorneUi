import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketsEfficientComponent } from './markets-efficient.component';

describe('MarketsEfficientComponent', () => {
  let component: MarketsEfficientComponent;
  let fixture: ComponentFixture<MarketsEfficientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketsEfficientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketsEfficientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
