import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostViewedProductsComponent } from './most-viewed-products.component';

describe('MostViewedProductsComponent', () => {
  let component: MostViewedProductsComponent;
  let fixture: ComponentFixture<MostViewedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostViewedProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostViewedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
