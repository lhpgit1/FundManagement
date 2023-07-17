import { Component ,OnInit, ViewChild, ElementRef,Output, EventEmitter} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-charts-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent{
  selectedFundName: string = '';
  selectedStockName: string = '';
  selectedDate: string = '';
  formattedDate: string = '';
  @Output() portfolioSelected: EventEmitter<{ fundName: string, date: any,stockName:any }> = new EventEmitter();
  @Output() transcationSelected: EventEmitter<{ fundName: string, date: any,stockName:any }> = new EventEmitter();
  constructor(private datePipe: DatePipe){}
  @ViewChild('fundNameElement') fundNameElementRef!: ElementRef;
  @ViewChild('dateElement') dateElementRef!: ElementRef;
  @ViewChild('stockNameElement') stockNameElementRef!: ElementRef;
  getSelectedPortfolio() {
    const selectedFundName = this.selectedFundName;
    const formattedDate = this.datePipe.transform(this.selectedDate, 'yyyy-MM-dd');
    const selectedStockName = this.selectedStockName;
    this.portfolioSelected.emit({ fundName: selectedFundName, date: formattedDate, stockName:selectedStockName});
  }
  getSelectedTranscation(){
    const selectedFundName = this.selectedFundName;
    const formattedDate = this.datePipe.transform(this.selectedDate, 'yyyy-MM-dd');
    const selectedStockName = this.selectedStockName;
    this.transcationSelected.emit({ fundName: selectedFundName, date: formattedDate, stockName:selectedStockName});
  }
}
