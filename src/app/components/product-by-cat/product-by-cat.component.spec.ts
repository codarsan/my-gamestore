import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByCatComponent } from './product-by-cat.component';

describe('ProductByCatComponent', () => {
  let component: ProductByCatComponent;
  let fixture: ComponentFixture<ProductByCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductByCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductByCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
