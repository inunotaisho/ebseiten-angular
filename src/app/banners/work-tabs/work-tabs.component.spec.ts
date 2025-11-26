import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTabsComponent } from './work-tabs.component';

describe('WorkTabsComponent', () => {
  let component: WorkTabsComponent;
  let fixture: ComponentFixture<WorkTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
