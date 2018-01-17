import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenaccountsComponent } from './openaccounts.component';

describe('OpenaccountsComponent', () => {
  let component: OpenaccountsComponent;
  let fixture: ComponentFixture<OpenaccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenaccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
