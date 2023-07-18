import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernewordersComponent } from './userneworders.component';

describe('UsernewordersComponent', () => {
  let component: UsernewordersComponent;
  let fixture: ComponentFixture<UsernewordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernewordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernewordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
