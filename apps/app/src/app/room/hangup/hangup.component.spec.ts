import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangupComponent } from './hangup.component';

describe('HangupComponent', () => {
  let component: HangupComponent;
  let fixture: ComponentFixture<HangupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HangupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
