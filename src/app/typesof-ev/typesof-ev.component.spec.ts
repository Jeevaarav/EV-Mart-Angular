import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesofEVComponent } from './typesof-ev.component';

describe('TypesofEVComponent', () => {
  let component: TypesofEVComponent;
  let fixture: ComponentFixture<TypesofEVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesofEVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesofEVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
