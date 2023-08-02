import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminoffermanagementComponent } from './adminoffermanagement.component';

describe('AdminoffermanagementComponent', () => {
  let component: AdminoffermanagementComponent;
  let fixture: ComponentFixture<AdminoffermanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminoffermanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminoffermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
