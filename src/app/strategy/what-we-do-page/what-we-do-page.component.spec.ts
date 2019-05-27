import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoPageComponent } from './what-we-do-page.component';

describe('WhatWeDoPageComponent', () => {
  let component: WhatWeDoPageComponent;
  let fixture: ComponentFixture<WhatWeDoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatWeDoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeDoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
