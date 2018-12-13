import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFaComponent } from './ng-fa.component';

describe('NgFaComponent', () => {
  let component: NgFaComponent;
  let fixture: ComponentFixture<NgFaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
