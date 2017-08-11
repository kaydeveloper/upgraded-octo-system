import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpEditCategoriesComponent } from './gp-edit-categories.component';

describe('GpEditCategoriesComponent', () => {
  let component: GpEditCategoriesComponent;
  let fixture: ComponentFixture<GpEditCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpEditCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpEditCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
