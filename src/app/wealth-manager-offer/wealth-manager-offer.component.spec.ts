import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthManagerOfferComponent } from './wealth-manager-offer.component';

describe('WealthManagerOfferComponent', () => {
  let component: WealthManagerOfferComponent;
  let fixture: ComponentFixture<WealthManagerOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WealthManagerOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WealthManagerOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
