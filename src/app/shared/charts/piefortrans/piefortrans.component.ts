import { Component, Input } from '@angular/core';
export type ChartOptions = {
  series: any
  chart: any
  responsive: any
  labels: any;
};
@Component({
  selector: 'app-charts-piefortrans',
  templateUrl: './piefortrans.component.html',
  styleUrls: ['./piefortrans.component.css']
})
export class PiefortransComponent {
  @Input() series:any[]=[];
  public chartOptions: Partial<ChartOptions>;
 
  constructor() {
    this.chartOptions = {
      //series: [40, 15, 30, 10, 5],
      chart: {
        type: "donut"
      },
      labels: ["Purchase", "Sell"],
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
