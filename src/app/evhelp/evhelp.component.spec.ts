import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVhelpComponent } from './evhelp.component';

describe('EVhelpComponent', () => {
  let component: EVhelpComponent;
  let fixture: ComponentFixture<EVhelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EVhelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EVhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
