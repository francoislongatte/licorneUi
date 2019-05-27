import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementTacticsComponent } from './management-tactics.component';

describe('Article4Component', () => {
  let component: ManagementTacticsComponent;
  let fixture: ComponentFixture<ManagementTacticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementTacticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementTacticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
