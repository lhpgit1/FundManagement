import { Component } from '@angular/core';
import {PortfolioService} from '../portfolio.service';
export interface PeriodicElement {
  PortfolioID:number;
  Fundname: string;
  StockName: string;
  Holdings: number;
  PurchaseCoast: number;
  DailyPrice:number;
  CurrentValue:number;
  Date:string;
}
export interface Periodic2Element {
  TranscationID:number;
  Fundname: string;
  StockName: string;
  TranscationsType:string;
  TransQuantity: number;
  TranscationPrice: number;
  TranscationAmount:number;
  Date:string;
}
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  public showPortfolioTable: boolean = true;
  public showPortfolioPie: boolean = true;
  portfolioData:PeriodicElement[]=[];
  transcationData:Periodic2Element[]=[];
  series:any[]=[];
  constructor(private portfolioService:PortfolioService){}
  ngOnInit(){
   this.portfolioService.getPortfolioTableData("Metori Number 1","2023-06-01","").subscribe((transformedData: any) => {
    this.portfolioData = transformedData.portfoliodata;
    this.series= transformedData.series;
    });
  }
  onPortfolioSelected(event: { fundName: string, date: string,stockName:string}) {
    this.showPortfolioTable=true;
    this.showPortfolioPie=true;
    const selectedFundName = event.fundName;
    const formattedDate = event.date;
    const selectedStockName = event.stockName;
    this.portfolioService.getPortfolioTableData(selectedFundName,formattedDate,selectedStockName).subscribe((transformedData: any) => {
    this.portfolioData = transformedData.portfoliodata;
    this.series= transformedData.series;
    }); 
  }
  onTranscationSelected(event: { fundName: string, date: string,stockName:string}){
    this.showPortfolioTable=false;
    this.showPortfolioPie=false;
    const selectedFundName = event.fundName;
    const formattedDate = event.date;
    const selectedStockName = event.stockName;
    this.portfolioService.getTranscationTableData(selectedFundName,formattedDate,selectedStockName).subscribe((transformedData: any) => {
      this.transcationData = transformedData.transcationdata;
      this.series= transformedData.series;
      }); 
  }
}
  



