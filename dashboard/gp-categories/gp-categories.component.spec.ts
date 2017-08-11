import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpCategoriesComponent } from './gp-categories.component';

describe('GpCategoriesComponent', () => {
  let component: GpCategoriesComponent;
  let fixture: ComponentFixture<GpCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
