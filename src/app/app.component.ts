import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sharedTable';
  products: any[]=[];
  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit()
  {
    this.http.get<any>('assets/products.json').subscribe(
      (res:any)=>{
        this.products = res['data'];
        console.log(this.products);
        
      })
  }

}
