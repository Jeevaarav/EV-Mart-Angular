import { Injectable } from '@angular/core';
import { LogLevel } from './logelevel.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { logger } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logLevel: LogLevel = new LogLevel();
  constructor(private http:HttpClient) { }

info(message: string): void {
    this.logWith(this.logLevel.Info, message, "info");
  }
warn(message: string): void {
    this.logWith(this.logLevel.Warn, message, "warn");
  }
error(message: string): void {
    this.logWith(this.logLevel.Error, message, "error");
  }

  private logWith(level: any, message: string, loggerStatus:any):any {
    const sendmessage={messageinfo:message,logStatus:loggerStatus};
    if (level <= this.logLevel.Error) {
      switch (level) {
        case this.logLevel.None:
          return this.http.post("/api/logs",sendmessage);
        case this.logLevel.Info:{
         const sendmessage1={messageinfo:message,level:level,logStatus:loggerStatus};
          this.sendConsole(logger.loggerurl,sendmessage1).subscribe(()=>{
          console.info("Initialization messages");
          });
          break;
        }
        case this.logLevel.Warn:{
          const sendmessage2={messageinfo:message,level:level,logStatus:loggerStatus};
          this.sendConsole(logger.loggerurl,sendmessage2).subscribe(()=>{
            console.warn("Warning messages");
          });
          break;
        }
        case this.logLevel.Error:{
          const sendmessage3={messageinfo:message,level:level,logStatus:loggerStatus};
          this.sendConsole(logger.loggerurl,sendmessage3).subscribe(()=>{
            console.warn("Error messages");
          });
          break;
        }
        default:
          console.debug(message);
      }
    }
  }


  information(message:any){
    const logData = { message: message };
    this.sendConsole("http://localhost:4000/api/logs", logData).subscribe(()=>{
    console.log("ok");
    });
  }

  sendConsole(url:any,logData:any){
    return this.http.post(url,logData);
  }
}
