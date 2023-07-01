import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BustingMythsComponent } from './busting-myths.component';

describe('BustingMythsComponent', () => {
  let component: BustingMythsComponent;
  let fixture: ComponentFixture<BustingMythsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BustingMythsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BustingMythsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
