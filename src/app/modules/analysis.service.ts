import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  constructor(private http: HttpClient,private datePipe: DatePipe) {}
  //获取基金数据
  getCardData() {
    return this.http.get<any[]>("https://localhost:7001/api/fund/trends?date=2023-06-30").pipe(
        map((data: any[]) => {
        const categories = ["Metori Number 1", "Metori Number 2","Metori Number 3","Metori Number 4","Metori Number 5"];
        const series = []; 
        for (const category of categories) {
           const totalInitialassets = data
          .filter(item => item.fundName === category)
          .reduce((sum, item) => sum + item.fundInitialassets, 0);
          series.push(totalInitialassets);
        }
        return {
          carddata:data.map(item => {
          return {
            Fundname: item.fundName,
            Fundsize: item.fundInitialassets,
            Share: item.fundShare,
            FundInitialPrice: item.fundInitialPrice,
            Networth: item.fundLatestnetworth,
            Float: ((item.fundLatestnetworth - item.fundInitialPrice) / item.fundInitialPrice * 100).toFixed(2),
            FtrendDate: item.ftrendDate
          };
        }),
         piedata:series

       }
      })
    );
  }
  getCard2Data() {
    return this.http.get<any[]>("https://localhost:7001/api/fund").pipe(
        map((data: any[]) => {
        return data.map(item => {
          return {
            Fundname: item.fundName,
            FundCode: item.fundId,
            FundType: item.fundType,
            FundManager: item.fundManager,
            FundInceptionDate:this.datePipe.transform(item.fundEstablishDate, 'yyyy-MM-dd'),   
            FundRedemptionOpenDay:this.datePipe.transform(item.fundRedemptionOpenDay, 'yyyy-MM-dd'),
          };
        });
      })
    );
  }
  //获取折线面积图数据
  getCureData(): Observable<any> {
    return this.http.get<any>('https://localhost:7001/api/fund/cure').pipe(
      map((data) => {
        const seriesMap = new Map<any, { data: any[]; ftrendDate: Set<any> }>();
  
        data.forEach((item: { fundName: any; fundLatestnetworth: any; ftrendDate: any; }) => {
          const { fundName, fundLatestnetworth, ftrendDate } = item;
          if (!seriesMap.has(fundName)) {
            seriesMap.set(fundName, { data: [], ftrendDate: new Set<any>() });
          }
          seriesMap.get(fundName)?.data.push(fundLatestnetworth);
          seriesMap.get(fundName)?.ftrendDate.add(ftrendDate);
        });
        const series: { name: any; data: any[]; }[] = Array.from(seriesMap, ([name, value]) => ({
          name,
          data: value.data,
        }));
        const xaxisCategories = Array.from(seriesMap.values(), (value) => Array.from(value.ftrendDate));  
        return { series, xaxisCategories };
      })
    );
  }
}
