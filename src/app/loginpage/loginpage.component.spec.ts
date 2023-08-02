import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { LoginpageComponent } from './loginpage.component';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LogincredentialsService } from '../logincredentials.service';

export class ActivatedRouteStub {
  /* Create any properties or methods required for your tests */
}
describe('LoginpageComponent', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;

  beforeEach(async () => {
    let activateRoute={
      queryParamMap:{
        get:()=>{
          return '3'
        }
      }
    };

    let mockloginservice=jasmine.createSpyObj(['userlogged','retrievedata']);
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule,ReactiveFormsModule],
      declarations: [ LoginpageComponent ],
      providers:[
        {provide:LogincredentialsService,useValue:mockloginservice},
        {provide:ActivatedRoute,useValue:activateRoute}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
