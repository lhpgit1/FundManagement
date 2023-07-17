import { Component, Input } from '@angular/core';
export interface card2Element {
  Fundname: string;
  FundCode: number;
  FundType: string;
  FundManager:string;
  FundInceptionDate:string;
  FundRedemptionOpenDay:string;
}
@Component({
  selector: 'app-charts-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component {
  @Input()dataSource!: card2Element[];
  constructor(){}
  displayedColumns: string[] = ['Fundname', 'FundCode', 'FundType','FundManager','FundInceptionDate','FundRedemptionOpenDay'];
}
