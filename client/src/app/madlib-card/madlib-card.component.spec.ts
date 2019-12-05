import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadlibCardComponent } from './madlib-card.component';

describe('MadlibCardComponent', () => {
  let component: MadlibCardComponent;
  let fixture: ComponentFixture<MadlibCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadlibCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadlibCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
