import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpRegisterComponent } from './gp-register.component';

describe('GpRegisterComponent', () => {
  let component: GpRegisterComponent;
  let fixture: ComponentFixture<GpRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
