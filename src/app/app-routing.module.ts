import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AnalysisComponent } from './modules/analysis/analysis.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: DefaultComponent ,
    children:[{
      path:'',
      component:AnalysisComponent
    },
    {
      path:'portfolio',
      component:PortfolioComponent
    }
    ]},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
