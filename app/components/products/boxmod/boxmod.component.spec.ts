import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxmodComponent } from './boxmod.component';

describe('BoxmodComponent', () => {
  let component: BoxmodComponent;
  let fixture: ComponentFixture<BoxmodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxmodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
