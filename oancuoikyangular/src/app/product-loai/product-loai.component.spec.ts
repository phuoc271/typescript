import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLoaiComponent } from './product-loai.component';

describe('ProductLoaiComponent', () => {
  let component: ProductLoaiComponent;
  let fixture: ComponentFixture<ProductLoaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductLoaiComponent]
    });
    fixture = TestBed.createComponent(ProductLoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
