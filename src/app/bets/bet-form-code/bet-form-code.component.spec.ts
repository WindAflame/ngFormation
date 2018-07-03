import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetFormCodeComponent } from './bet-form-code.component';

describe('BetFormCodeComponent', () => {
  let component: BetFormCodeComponent;
  let fixture: ComponentFixture<BetFormCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetFormCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetFormCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
