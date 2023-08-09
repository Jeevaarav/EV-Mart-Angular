import { Injectable } from '@angular/core';
import { LogLevel } from './logelevel.model';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logLevel: LogLevel = new LogLevel();
  constructor() { }

  // log(message: string): void {
  //   console.log(`[LOG]: ${message}`);
  // }

  // error(message: string): void {
  //   console.log(message);
  //   console.error(`[ERROR]: ${message}`);
  // }
info(message: string): void {
    this.logWith(this.logLevel.Info, message);
  }
warn(message: string): void {
    this.logWith(this.logLevel.Warn, message);
  }
error(message: string): void {
    this.logWith(this.logLevel.Error, message);
  }

  private logWith(level: any, message: string): void {
    if (level <= this.logLevel.Error) {
      switch (level) {
        case this.logLevel.None:
          return console.log(message);
        case this.logLevel.Info:
          return console.info('%c' + new Date() + message, 'color: #6495ED');
        case this.logLevel.Warn:
          return console.warn('%c' + new Date() + message, 'color: #FF8C00');
        case this.logLevel.Error:
          return console.error('%c' + new Date() + message, 'color: #DC143C');
        default:
          console.debug(message);
      }
    }
  }
}
