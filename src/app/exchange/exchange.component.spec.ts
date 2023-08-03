import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeComponent } from './exchange.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

describe('ExchangeComponent', () => {
  let component: ExchangeComponent;
  let fixture: ComponentFixture<ExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[SlickCarouselModule],
      declarations: [ ExchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
