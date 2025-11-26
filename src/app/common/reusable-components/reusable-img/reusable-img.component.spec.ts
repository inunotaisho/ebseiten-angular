import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableImgComponent } from './reusable-img.component';

describe('ReusableImgComponent', () => {
  let component: ReusableImgComponent;
  let fixture: ComponentFixture<ReusableImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
