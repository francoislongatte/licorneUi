import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatTheyDoComponent } from './what-they-do.component';

describe('WhatTheyDoComponent', () => {
  let component: WhatTheyDoComponent;
  let fixture: ComponentFixture<WhatTheyDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatTheyDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatTheyDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
