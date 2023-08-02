import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ExchangebookingComponent } from './exchangebooking.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ExchangebookingComponent', () => {
  let component: ExchangebookingComponent;
  let fixture: ComponentFixture<ExchangebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule,ReactiveFormsModule],
      declarations: [ ExchangebookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
