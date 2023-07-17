import { Component, Input } from '@angular/core';

export interface PeriodicElement {
  Fundname: string;
  Fundsize: number;
  Share: number;
  FundInitialPrice:number;
  Networth:number;
  FtrendDate:string;
}
@Component({
  selector: 'app-charts-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()dataSource!: PeriodicElement[];
  constructor(){}
  displayedColumns: string[] = ['Fundname', 'Fundsize', 'Share','IOP','Networth','Float'];
}
