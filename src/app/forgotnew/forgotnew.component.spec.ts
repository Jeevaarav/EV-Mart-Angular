import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotnewComponent } from './forgotnew.component';

describe('ForgotnewComponent', () => {
  let component: ForgotnewComponent;
  let fixture: ComponentFixture<ForgotnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
