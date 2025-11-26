import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessFailureMessageComponent } from './success-failure-message.component';

describe('SuccessFailureMessageComponent', () => {
  let component: SuccessFailureMessageComponent;
  let fixture: ComponentFixture<SuccessFailureMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessFailureMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessFailureMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
