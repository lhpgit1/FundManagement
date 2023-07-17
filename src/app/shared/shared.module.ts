import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule } from'@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './charts/area/area.component';
import { NgApexchartsModule} from 'ng-apexcharts';
import { CardComponent } from './charts/card/card.component'
import { MatTableModule } from '@angular/material/table';
import { SelectComponent } from './charts/select/select.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { PiechartComponent } from './charts/piechart/piechart.component';
import { PortfoliotableComponent } from './charts/portfoliotable/portfoliotable.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { TranscationtableComponent } from './charts/transcationtable/transcationtable.component';
import { PiefortransComponent } from './charts/piefortrans/piefortrans.component';
import { Card2Component } from './charts/card2/card2.component';
import { PieforfundComponent } from './charts/pieforfund/pieforfund.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    CardComponent,
    SelectComponent,
    PiechartComponent,
    PortfoliotableComponent,
    TranscationtableComponent,
    PiefortransComponent,
    Card2Component,
    PieforfundComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDividerModule, 
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    RouterModule,
    NgApexchartsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule

  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    CardComponent,
    SelectComponent,
    PiechartComponent,
    PortfoliotableComponent,
    TranscationtableComponent,
    PiefortransComponent,
    Card2Component,
    PieforfundComponent,
  ],
  providers: [
    DatePipe
  ],
})
export class SharedModule { }
