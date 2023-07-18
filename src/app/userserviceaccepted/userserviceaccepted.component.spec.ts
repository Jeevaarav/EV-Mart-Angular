import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserserviceacceptedComponent } from './userserviceaccepted.component';

describe('UserserviceacceptedComponent', () => {
  let component: UserserviceacceptedComponent;
  let fixture: ComponentFixture<UserserviceacceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserserviceacceptedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserserviceacceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
