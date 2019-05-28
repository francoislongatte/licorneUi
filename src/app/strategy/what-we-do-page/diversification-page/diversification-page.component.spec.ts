import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversificationPageComponent } from './diversification-page.component';

describe('DiversificationComponent', () => {
  let component: DiversificationPageComponent;
  let fixture: ComponentFixture<DiversificationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversificationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
