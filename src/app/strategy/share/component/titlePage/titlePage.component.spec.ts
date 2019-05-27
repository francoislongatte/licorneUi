import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePageComponent } from './titlePage.component';

describe('TitleComponent', () => {
  let component: TitlePageComponent;
  let fixture: ComponentFixture<TitlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
