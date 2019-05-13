import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionnalsOfferComponent } from './institutionnals-offer.component';

describe('InstitutionnalsOfferComponent', () => {
  let component: InstitutionnalsOfferComponent;
  let fixture: ComponentFixture<InstitutionnalsOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionnalsOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionnalsOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
