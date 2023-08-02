import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'

import { AdminformComponent } from './adminform.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AdminformComponent', () => {
  let component: AdminformComponent;
  let fixture: ComponentFixture<AdminformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule,ReactiveFormsModule],
      declarations: [ AdminformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
