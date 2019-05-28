import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyRiskManagementPageComponent } from './money-risk-management-page.component';

describe('MoneyRiskManagementPageComponent', () => {
  let component: MoneyRiskManagementPageComponent;
  let fixture: ComponentFixture<MoneyRiskManagementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyRiskManagementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyRiskManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
