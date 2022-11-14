import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColumnSetting, PipeFormat } from '../dynamic-table2/modal';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {

  // headArray = [  
  //   { field: 'code', header: 'Code' },
  //   { field: 'name', header: 'Name' },
  //   { field: 'category', header: 'Category' },
  //   { field: 'quantity', header: 'Quantity' },
  //   ]
    details: any[]=[];
    detailSettings: ColumnSetting[] = [
      {
        primaryKey: 'name',
        header: 'Name',
      },
      {
        primaryKey: 'state',
        header: 'State',
      },
      {
        primaryKey: 'date',
        header: 'Date',
        format:PipeFormat.DATE
      },
      {
        primaryKey: 'amount',
        header: 'Amount',
        format: PipeFormat.CURRENCY,
      },
    ];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.loadDetails()
  }

  loadDetails() {
    this.http.get<any>('assets/example.json').subscribe(
    (res:any)=>{
      this.details = res;
      console.log(this.details);
      
    })
  }

}
