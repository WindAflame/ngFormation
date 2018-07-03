import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetFormTemplateComponent } from './bet-form-template.component';

describe('BetFormTemplateComponent', () => {
  let component: BetFormTemplateComponent;
  let fixture: ComponentFixture<BetFormTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetFormTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
