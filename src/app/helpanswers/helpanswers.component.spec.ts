import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpanswersComponent } from './helpanswers.component';

describe('HelpanswersComponent', () => {
  let component: HelpanswersComponent;
  let fixture: ComponentFixture<HelpanswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpanswersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpanswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
