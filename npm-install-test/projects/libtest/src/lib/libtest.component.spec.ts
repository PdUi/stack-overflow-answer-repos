import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibtestComponent } from './libtest.component';

describe('LibtestComponent', () => {
  let component: LibtestComponent;
  let fixture: ComponentFixture<LibtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
