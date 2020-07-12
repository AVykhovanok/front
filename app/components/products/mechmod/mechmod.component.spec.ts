import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechmodComponent } from './mechmod.component';

describe('MechmodComponent', () => {
  let component: MechmodComponent;
  let fixture: ComponentFixture<MechmodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechmodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
