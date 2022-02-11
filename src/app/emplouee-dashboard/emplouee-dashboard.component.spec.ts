import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploueeDashboardComponent } from './emplouee-dashboard.component';

describe('EmploueeDashboardComponent', () => {
  let component: EmploueeDashboardComponent;
  let fixture: ComponentFixture<EmploueeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploueeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploueeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
