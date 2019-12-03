import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadlibGeneratorComponent } from './madlib-generator.component';

describe('MadlibGeneratorComponent', () => {
  let component: MadlibGeneratorComponent;
  let fixture: ComponentFixture<MadlibGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadlibGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadlibGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
