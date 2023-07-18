import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiledeliveredordersComponent } from './profiledeliveredorders.component';

describe('ProfiledeliveredordersComponent', () => {
  let component: ProfiledeliveredordersComponent;
  let fixture: ComponentFixture<ProfiledeliveredordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiledeliveredordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfiledeliveredordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
