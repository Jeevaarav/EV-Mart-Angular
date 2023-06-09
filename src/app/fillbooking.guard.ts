import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface debitcard{
  canExit:()=>boolean;
}

export class FillbookingGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: debitcard,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean{
    return component.canExit ? component.canExit():false;
  }
  
}
