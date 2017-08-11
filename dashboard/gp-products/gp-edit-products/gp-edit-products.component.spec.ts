import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpEditProductsComponent } from './gp-edit-products.component';

describe('GpEditProductsComponent', () => {
  let component: GpEditProductsComponent;
  let fixture: ComponentFixture<GpEditProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpEditProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpEditProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
