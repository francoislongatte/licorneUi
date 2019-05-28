import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementDiversificationComponent } from './implement-diversification.component';

describe('ImplementDiversificationComponent', () => {
  let component: ImplementDiversificationComponent;
  let fixture: ComponentFixture<ImplementDiversificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementDiversificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementDiversificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
