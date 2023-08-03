import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { LoginpageComponent } from './loginpage.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LogincredentialsService } from '../logincredentials.service';
import { ForgotnewComponent } from '../forgotnew/forgotnew.component';
import { ForgotpassComponent } from '../forgotpass/forgotpass.component';
import { RegisterpageComponent } from '../registerpage/registerpage.component';

export class ActivatedRouteStub {
  /* Create any properties or methods required for your tests */
}
describe('LoginpageComponent', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;

  beforeEach(async () => {


    let mockloginservice=jasmine.createSpyObj(['userlogged','retrievedata']);
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule,ReactiveFormsModule,RouterModule.forRoot([
        {
          path:"login/register",
          component:RegisterpageComponent
        },
        {
          path:"login/forgot1",
          component:ForgotpassComponent
        },
        {
          path:"login/forgot1/forgotnew",
          component:ForgotnewComponent
        },
      {
        path:"",
        component:LoginpageComponent
      }
      ])],
      declarations: [ LoginpageComponent ]
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
