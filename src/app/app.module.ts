import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { TablesComponent } from './tables/tables.component';
import {TableModule,} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Table2Component } from './table2/table2.component';
import { DynamicTable2Component } from './dynamic-table2/dynamic-table2.component';
import { CommonPipe } from './dynamic-table2/common.pipe';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTableComponent,
    TablesComponent,
    Table2Component,
    DynamicTable2Component,
    CommonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginatorModule,
    TableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
