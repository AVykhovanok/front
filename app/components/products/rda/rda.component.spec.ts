import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdaComponent } from './rda.component';

describe('RdaComponent', () => {
  let component: RdaComponent;
  let fixture: ComponentFixture<RdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
