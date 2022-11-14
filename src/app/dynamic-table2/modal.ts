/*
 * The ColumnSettings interface consists of a primaryKey property which holds the * cell value, a header property which is used as the column header, and a format * of enum type PipeFormat to specify formatting. The PipeFormat could be
 * DEFAULT, CURRENCY OR DATE, other formats can be added in the future as per need.
 */

export interface ColumnSetting {
    primaryKey: string;
    header?: string;
    format?: PipeFormat;
  }
  
  export interface ButtonSettings {
    title: string;
    func: any;
    class?: string[];
    params?: Object;
  }
  
  export enum PipeFormat {
    DEFAULT, // 0
    CURRENCY, // 1
    DATE, // 2
    
  }