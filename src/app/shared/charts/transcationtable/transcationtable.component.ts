import { Component, Input } from '@angular/core';
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
  selector: 'app-charts-transcationtable',
  templateUrl: './transcationtable.component.html',
  styleUrls: ['./transcationtable.component.css']
})
export class TranscationtableComponent {
  displayedColumns: string[] = ['TranscationID', 'Fundname', 'StockName', 'TranscationsType','TransQuantity','TranscationPrice','TranscationAmount','Date',];
  @Input()dataSource!: Periodic2Element[];
}
