import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpProductsComponent } from './gp-products.component';

describe('GpProductsComponent', () => {
  let component: GpProductsComponent;
  let fixture: ComponentFixture<GpProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
