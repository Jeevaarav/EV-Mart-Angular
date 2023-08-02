import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ServiceadminComponent } from './serviceadmin.component';

describe('ServiceadminComponent', () => {
  let component: ServiceadminComponent;
  let fixture: ComponentFixture<ServiceadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
      declarations: [ ServiceadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
