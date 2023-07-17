import { Component, Input } from '@angular/core';
export type ChartOptions = {
  series: any//ApexAxisChartSeries;
  chart: any//ApexChart;
  xaxis: any//ApexXAxis;
  stroke: any//ApexStroke;
  tooltip: any//ApexTooltip;
  dataLabels: any//ApexDataLabels;
};
@Component({
  selector: 'app-charts-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent {  
  @Input()series: { name: any; data: any[]; }[] = [];
  @Input()xaxis: { type: any; categories: any[]; } = {
    type: "datetime",
    categories: []
  };
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      chart: {
        height: 450,
        type: "area",
        background: '#FFFFFF'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }
  ngAfterViewInit(): void {
    console.log('这是area组件中打印的');
    console.log(this.series);
  }
}
