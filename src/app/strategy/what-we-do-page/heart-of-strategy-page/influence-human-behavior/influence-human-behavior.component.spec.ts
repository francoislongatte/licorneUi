import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluenceHumanBehaviorComponent } from './influence-human-behavior.component';

describe('InfluenceHumanBehaviorComponent', () => {
  let component: InfluenceHumanBehaviorComponent;
  let fixture: ComponentFixture<InfluenceHumanBehaviorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluenceHumanBehaviorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluenceHumanBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
