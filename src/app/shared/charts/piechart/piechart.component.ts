import { Component, Input } from '@angular/core';
export type ChartOptions = {
  series: any
  chart: any
  responsive: any
  labels: any;
};

@Component({
  selector: 'app-charts-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
  @Input() series:any[]=[];
  public chartOptions: Partial<ChartOptions>;
 
  constructor() {
    this.chartOptions = {
      //series: [40, 15, 30, 10, 5],
      chart: {
        type: "donut"
      },
      labels: ["深证A股", "深证B股", "上证A股", "上证B股", "其他"],
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
