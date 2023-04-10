import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report13Component } from './report13.component';

describe('Report13Component', () => {
  let component: Report13Component;
  let fixture: ComponentFixture<Report13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Report13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
