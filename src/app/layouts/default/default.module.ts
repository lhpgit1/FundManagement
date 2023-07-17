import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { AnalysisComponent } from 'src/app/modules/analysis/analysis.component';
import { PortfolioComponent } from 'src/app/modules/portfolio/portfolio.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AnalysisService } from 'src/app/modules/analysis.service';
@NgModule({
  declarations: [
    DefaultComponent,
    AnalysisComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers:[
    AnalysisService
  ]
})
export class DefaultModule { }
