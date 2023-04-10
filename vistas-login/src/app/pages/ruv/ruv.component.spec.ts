import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuvComponent } from './ruv.component';

describe('RuvComponent', () => {
  let component: RuvComponent;
  let fixture: ComponentFixture<RuvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
