import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-busting-myths',
  templateUrl: './busting-myths.component.html',
  styleUrls: ['./busting-myths.component.css']
})
export class BustingMythsComponent implements OnInit {

  constructor(private logger:LoggerService){}

fact:boolean=false;
fact1:boolean=false;
fact2:boolean=false;
fact3:boolean=false;
fact4:boolean=false;
fact5:boolean=false;
fact6:boolean=false;
fact7:boolean=false;
fact8:boolean=false;
bullet:boolean=false;

  //These blocks are used to hide and show the description for the particular clicked content
    openfact(){
      this.fact=true;
    }
    openfact1(){
      this.fact1=true;
    }
    openfact2(){
      this.fact2=true;
    }
    openfact3(){
      this.fact3=true;
    }
    openfact4(){
      this.fact4=true;
    }
    openfact5(){
      this.fact5=true;
    }
    openfact6(){
      this.fact6=true;
      this.bullet=true;
    }
    openfact7(){
      this.fact7=true;
    }
    openfact8(){
      this.fact8=true;
    }

    ngOnInit(): void {
      this.logger.info("Busting of myths Component initialized..");
    }
}
