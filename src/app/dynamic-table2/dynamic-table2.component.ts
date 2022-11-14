import { Component, Input, OnInit } from '@angular/core';
import { ButtonSettings,ColumnSetting } from './modal';

@Component({
  selector: 'app-dynamic-table2',
  templateUrl: './dynamic-table2.component.html',
  styleUrls: ['./dynamic-table2.component.css']
})
export class DynamicTable2Component implements OnInit {

  /* We are expecting 4 inputs: 

   * title: which represents the tables title
   * records: which represents the table data 
   * settings: which represents configuration of each cell // Optional
   * buttons: which represents button configurations  // Optional
   * 
   */

  @Input() title!: string; // Table Title
  @Input() records!: any[]; // Table Data
  @Input() settings!: ColumnSetting[]; // Table Configuration Settings
  @Input() buttons!: ButtonSettings[]; // Button Settings - Optional

  columnMaps!: ColumnSetting[]; // Placeholder for storing table configuraion settings

  buttonHeader!: string; // Button <th> text

  first = 0;

  rows = 5;
  constructor() { }

  ngOnInit(): void {
    if (!this.buttons) this.buttons = [];
    console.log(this.records)

    // Determine buttton header text
    this.buttons.length > 1
      ? (this.buttonHeader = 'Actions')
      : (this.buttonHeader = 'Action');

    if (this.settings) {
      // If settings are provided
      this.columnMaps = this.settings;
      console.log(this.columnMaps);
      
    } else {
      // If settings are not provided, format headers
      this.columnMaps = Object.keys(this.records[0]).map((key) => {
        return {
          primaryKey: key,
          header:
            key.slice(0, 1).toUpperCase() + key.replace(/_/g, ' ').slice(1),
          format: 0,
        };
      });
    }
  }

}
