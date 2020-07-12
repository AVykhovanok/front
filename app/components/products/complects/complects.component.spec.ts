import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplectsComponent } from './complects.component';

describe('ComplectsComponent', () => {
  let component: ComplectsComponent;
  let fixture: ComponentFixture<ComplectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
