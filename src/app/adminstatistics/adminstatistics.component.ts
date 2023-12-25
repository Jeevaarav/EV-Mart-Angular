import { HttpClient } from '@angular/common/http';
import { Component,ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries,
  ApexResponsive
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
export type ChartOptions1 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};


@Component({
  selector: 'app-adminstatistics',
  templateUrl: './adminstatistics.component.html',
  styleUrls: ['./adminstatistics.component.css']
})
export class AdminstatisticsComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  public chartOptions1!: Partial<ChartOptions1>;

  deliveredOrders:any;
  vehicleBrandsavail:any;
  vehiclelength:any;
  storeBrands:any=[];
  brandName:any;

  constructor(private http:HttpClient){
    this.http.get<any>("http://localhost:3000/Register").subscribe((order)=>{
    this.deliveredOrders=order.deliveredOrders;
    // console.log(this.deliveredOrders);
    })

    this.http.get<any>("http://localhost:3000/vehicleBrands").subscribe((vehicleBrands)=>{
      this.vehicleBrandsavail=vehicleBrands;
      this.vehiclelength=vehicleBrands.length;
      for(var i=0;i<this.vehiclelength;i++){
        console.log(this.vehicleBrandsavail[0].Brandname)
        this.storeBrands[i]=this.vehicleBrandsavail[i].Brandname;
      }
      this.pieChart();
    })


    console.log(this.brandName);


    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 450,
        width:500,
        type: "bar"
      },
      title: {
        text: "Order management"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };
  }

  pieChart(){
    this.chartOptions1 = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 480,
        height:580,
        type: "pie"
      },
      labels: this.storeBrands,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
