import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetFormCodeAdvancedComponent } from './bet-form-code-advanced.component';

describe('BetFormCodeAdvancedComponent', () => {
  let component: BetFormCodeAdvancedComponent;
  let fixture: ComponentFixture<BetFormCodeAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetFormCodeAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetFormCodeAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
