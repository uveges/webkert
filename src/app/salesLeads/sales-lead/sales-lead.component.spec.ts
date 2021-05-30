import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesLeadComponent } from './sales-lead.component';

describe('SalesLeadComponent', () => {
  let component: SalesLeadComponent;
  let fixture: ComponentFixture<SalesLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesLeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
