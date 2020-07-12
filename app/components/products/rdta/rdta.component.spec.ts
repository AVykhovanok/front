import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdtaComponent } from './rdta.component';

describe('RdtaComponent', () => {
  let component: RdtaComponent;
  let fixture: ComponentFixture<RdtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
