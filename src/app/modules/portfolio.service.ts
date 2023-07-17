import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor(private http: HttpClient,private datePipe: DatePipe) { }

  getPortfolioTableData(FundName: string, Date: string,StockName:string){
   const url = `https://localhost:7001/api/portfolio`;
   const params = new HttpParams()
    .set('fundName', FundName)
    .set('date', Date);
    return this.http.get<any[]>(url, { params }).pipe(
      map((data: any[]) => {
        //为饼图提供series数据
        const categories = ['深证A股', '深证B股', '上证A股', '上证B股'];
        const otherCategory = '其他';
        const series = []; 

        for (const category of categories) {
           const totalPurchaseCoast = data
          .filter(item => item.stockType === category)
          .reduce((sum, item) => sum + item.purchaseCoast, 0);
          series.push(totalPurchaseCoast);
        }
        // 计算 '其他' 类别的总和
        const otherTotalPurchaseCoast = data
        .filter(item => !categories.includes(item.stockType)) // 排除掉四个分类
        .reduce((sum, item) => sum + item.purchaseCoast, 0);
         series.push(otherTotalPurchaseCoast);
        //多条件查询分支
        if(StockName){
          data=data.filter(item => item.stockName === StockName);
        }
        return{
        portfoliodata:data.map(item => {
        return {
          PortfolioID:item.portfolioId,
          Fundname: item.fundName,
          StockName: item.stockName,
          Holdings: item.holdingQuantity,
          PurchaseCoast: item.purchaseCoast,
          DailyPrice:item.stockDailyCloseprice,
          CurrentValue:(item.stockDailyCloseprice*item.holdingQuantity).toFixed(2),
          Date:this.datePipe.transform(item.holidingDate, 'yyyy-MM-dd')
        };
      }),
         series:series
      };
    })
  );

  }
  getTranscationTableData(FundName: string, Date: string,StockName:string){
    const url = `https://localhost:7001/api/transrecord`;
    const params = new HttpParams()
     .set('fundName', FundName)
     .set('date', Date);
     return this.http.get<any[]>(url, { params }).pipe(
       map((data: any[]) => {

        //为饼图提供series数据
        const categories = ['Purchase', 'Sell',];
        const series = []; 

        for (const category of categories) {
           const totalCoast = data
          .filter(item => item.transType === category)
          .reduce((sum, item) => sum + item.transAmount, 0);
          series.push(totalCoast);
        }
         //多条件查询分支
         if(StockName){
           data=data.filter(item => item.stockName === StockName);
         }
         return{
         transcationdata:data.map(item => {
         return {
           TranscationID:item.transcationId,
           Fundname: item.fundName,
           StockName: item.stockName,
           TranscationsType:item.transType,
           TransQuantity:item.transQuantity,
           TranscationPrice:item.unitPrice,
           TranscationAmount:item.transAmount,
           Date:this.datePipe.transform(item.transDate, 'yyyy-MM-dd')
         };
       }),
          series:series
       };
     })
   );
 
  }

}
