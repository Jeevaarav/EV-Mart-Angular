import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { OffersComponent } from './offers.component';
import { RouterModule } from '@angular/router';
import { ExchangeComponent } from '../exchange/exchange.component';
import { ProductpageComponent } from '../productpage/productpage.component';

describe('OffersComponent', () => {
  let component: OffersComponent;
  let fixture: ComponentFixture<OffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule,RouterModule.forRoot([
        {
          path:"exchange",
          component:ExchangeComponent
        },
        {
          path:"Product",
          component:ProductpageComponent
        }
      ])],
      declarations: [ OffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
