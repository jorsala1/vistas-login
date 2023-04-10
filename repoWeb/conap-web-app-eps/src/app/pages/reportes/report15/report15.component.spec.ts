import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report15Component } from './report15.component';

describe('Report15Component', () => {
  let component: Report15Component;
  let fixture: ComponentFixture<Report15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Report15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
