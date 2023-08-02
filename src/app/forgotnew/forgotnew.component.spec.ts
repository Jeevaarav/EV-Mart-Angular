import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ForgotnewComponent } from './forgotnew.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ForgotnewComponent', () => {
  let component: ForgotnewComponent;
  let fixture: ComponentFixture<ForgotnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule,ReactiveFormsModule],
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
