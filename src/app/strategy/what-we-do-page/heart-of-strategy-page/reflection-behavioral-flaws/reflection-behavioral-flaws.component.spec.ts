import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionBehavioralFlawsComponent } from './reflection-behavioral-flaws.component';

describe('ReflectionBehavioralFlawsComponent', () => {
  let component: ReflectionBehavioralFlawsComponent;
  let fixture: ComponentFixture<ReflectionBehavioralFlawsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReflectionBehavioralFlawsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectionBehavioralFlawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
