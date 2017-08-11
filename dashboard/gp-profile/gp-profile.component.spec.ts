import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpProfileComponent } from './gp-profile.component';

describe('GpProfileComponent', () => {
  let component: GpProfileComponent;
  let fixture: ComponentFixture<GpProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
