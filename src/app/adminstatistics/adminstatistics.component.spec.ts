import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstatisticsComponent } from './adminstatistics.component';

describe('AdminstatisticsComponent', () => {
  let component: AdminstatisticsComponent;
  let fixture: ComponentFixture<AdminstatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminstatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminstatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
