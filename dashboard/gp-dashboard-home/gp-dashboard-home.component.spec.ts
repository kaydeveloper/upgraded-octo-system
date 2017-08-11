import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpDashboardHomeComponent } from './gp-dashboard-home.component';

describe('GpDashboardHomeComponent', () => {
  let component: GpDashboardHomeComponent;
  let fixture: ComponentFixture<GpDashboardHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpDashboardHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpDashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
