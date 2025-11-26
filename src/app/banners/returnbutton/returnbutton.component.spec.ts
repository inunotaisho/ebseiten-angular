import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnbuttonComponent } from './returnbutton.component';

describe('ReturnbuttonComponent', () => {
  let component: ReturnbuttonComponent;
  let fixture: ComponentFixture<ReturnbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
