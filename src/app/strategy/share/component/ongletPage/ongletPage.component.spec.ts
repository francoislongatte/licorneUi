import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngletPageComponent } from './ongletPage.component';

describe('OngletComponent', () => {
  let component: OngletPageComponent;
  let fixture: ComponentFixture<OngletPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngletPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngletPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
