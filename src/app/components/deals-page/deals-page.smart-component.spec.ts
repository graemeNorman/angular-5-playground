import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsPageSmartComponent } from './deals-page.smart-component';

describe('DealsPageSmartComponent', () => {
  let component: DealsPageSmartComponent;
  let fixture: ComponentFixture<DealsPageSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealsPageSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsPageSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
