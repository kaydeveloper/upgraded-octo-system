import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpAddProductsComponent } from './gp-add-products.component';

describe('GpAddProductsComponent', () => {
  let component: GpAddProductsComponent;
  let fixture: ComponentFixture<GpAddProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpAddProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpAddProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
