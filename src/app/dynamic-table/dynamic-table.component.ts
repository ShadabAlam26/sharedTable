import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {ChangeDetectorRef } from '@angular/core';
import { LazyLoadEvent, SortEvent } from 'primeng/api';
import { Paginator } from 'primeng/paginator';
import { TablesComponent } from '../tables/tables.component';
@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {

  @Input() HeadArray : any[] =[];
  @Input() GridArray : any[]=[];
  @Input() dataLength!: number
  @Input() isAction : boolean = false; 
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() paginate = new EventEmitter<any>();
  @Output() sorting = new EventEmitter<any>();

  // @ViewChild('loading') loadData!:TablesComponent ;
  first = 0;

  rows = 5;
  totalRecords!: number;
  paginationFirstValue: any;
  pageChange: any;
  loading!:boolean;
  @Input() booleanValue: any = false;
  
  // @ViewChild('paginator', { static: true }) paginator!: Paginator

  // private updateCurrentPage(currentPage: number): void {
  //   setTimeout(() => this.paginator.changePage(currentPage));
  // }
  
  constructor(private cdref:ChangeDetectorRef) { }

  ngAfterViewChecked() {
    // console.log(this.dataLength,this.GridArray); 
    this.totalRecords = this.GridArray.length
    // this.loading = this.loadData.loading
    this.cdref.detectChanges()
    
  }
  ngOnInit(): void {
    // console.log(this.GridArray,this.HeadArray);
    // console.log(this.dataLength);
    console.log(this.first);
    
  }

  editProduct(item:any)
  {
    this.onEdit.emit(item)
  }

  deleteProduct(item:any)
  {
    this.onDelete.emit(item)
  }

  paginates(event:LazyLoadEvent)
  {
    this.paginate.emit(event)
  }


  sortFunction(column:any,booleanValue:any)
  {
    this.sorting.emit({column,booleanValue})
  }
}
