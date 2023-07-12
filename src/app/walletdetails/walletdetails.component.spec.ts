import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletdetailsComponent } from './walletdetails.component';

describe('WalletdetailsComponent', () => {
  let component: WalletdetailsComponent;
  let fixture: ComponentFixture<WalletdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
