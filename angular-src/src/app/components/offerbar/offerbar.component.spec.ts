import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferbarComponent } from './offerbar.component';

describe('OfferbarComponent', () => {
  let component: OfferbarComponent;
  let fixture: ComponentFixture<OfferbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
