import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Table2Component } from './table2/table2.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path:'',
    component: TablesComponent,
    pathMatch:'full'
  },
  {
    path:'table2',
    component:Table2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ { provide: LocationStrategy, useClass: PathLocationStrategy } ]
})
export class AppRoutingModule { }
