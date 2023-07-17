import { Component, Input } from '@angular/core';
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
@Component({
  selector: 'app-charts-portfoliotable',
  templateUrl: './portfoliotable.component.html',
  styleUrls: ['./portfoliotable.component.css']
})
export class PortfoliotableComponent {
  displayedColumns: string[] = ['PortfolioID', 'Fundname', 'StockName', 'Holdings','PurchaseCoast','DailyPrice','CurrentValue','Date'];
  @Input()dataSource!: PeriodicElement[];
}
