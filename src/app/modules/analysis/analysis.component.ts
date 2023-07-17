import { Component } from '@angular/core';
import {AnalysisService} from '../analysis.service';

export interface PeriodicElement {
  Fundname: string;
  Fundsize: number;
  Share: number;
  FundInitialPrice:number;
  Networth:number;
  FtrendDate:string;
}
export interface card2Element {
  Fundname: string;
  FundCode: number;
  FundType: string;
  FundManager:string;
  FundInceptionDate:string;
  FundRedemptionOpenDay:string;
}
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent {
  constructor(private analysisService:AnalysisService){}
  fundData:PeriodicElement[]=[];
  fund2Data:card2Element[]=[];
  fundTotalSize:number=1000000;
  seriesforpie:any[]=[];
  series: { name: any; data: any[]; }[] = [];
  xaxisCategories: any[] = [];
  xaxis!: {
    type: "datetime";
    categories:any[]
  }
  ngOnInit() {
  this.analysisService.getCardData().subscribe((transformedData: any) => {
    this.fundData = transformedData.carddata;
    this.seriesforpie=transformedData.piedata;
    //console.log(this.fundData);
  });
  this.analysisService.getCard2Data().subscribe((transformedData: any[]) => {
    this.fund2Data = transformedData;
    //console.log(this.fundData);
  });
  this.analysisService.getCureData().subscribe((data) => {
    this.series = data.series;
    this.xaxisCategories = data.xaxisCategories[0];
    console.log(this.series );
    console.log(this.xaxisCategories);
    this.xaxis={
      type: "datetime",
      categories:this.xaxisCategories
    }
  });

  //一定延迟后再显示数据表格,确保数据获取和渲染完成后再显示数据表
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 400);
 } 
}
