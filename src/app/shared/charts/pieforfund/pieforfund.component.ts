import { Component, Input } from '@angular/core';
export type ChartOptions = {
  series: any
  chart: any
  responsive: any
  labels: any;
};

@Component({
  selector: 'app-charts-pieforfund',
  templateUrl: './pieforfund.component.html',
  styleUrls: ['./pieforfund.component.css']
})
export class PieforfundComponent {
  @Input() series:any[]=[];
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      //series: [40, 15, 30, 10, 5],
      chart: {
        type: "donut"
      },
      labels: ["Metori Number 1", "Metori Number 2","Metori Number 3","Metori Number 4","Metori Number 5"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
              height:500
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
