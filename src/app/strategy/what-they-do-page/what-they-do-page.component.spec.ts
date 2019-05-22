import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatTheyDoPageComponent } from './what-they-do-page.component';

describe('WhatTheyDoPageComponent', () => {
  let component: WhatTheyDoPageComponent;
  let fixture: ComponentFixture<WhatTheyDoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatTheyDoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatTheyDoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
