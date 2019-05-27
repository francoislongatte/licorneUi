import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyRiskManagementComponent } from './money-risk-management.component';

describe('Article6Component', () => {
  let component: MoneyRiskManagementComponent;
  let fixture: ComponentFixture<MoneyRiskManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyRiskManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyRiskManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
