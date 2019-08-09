import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  single: any[];
  multi: any[];
  view: any[];
   viewGrid;
  colorScheme;
  showXAxis; 
  showYAxis ;
  gradient;
  showLegend ;
  showXAxisLabel ;
  xAxisLabel ;
  showYAxisLabel ;
  yAxisLabel ;

  
  constructor() { 
   
   

  }

  ngOnInit() {
    this.showTable("")
  }
  showTable(value){
    this.single = [
      {
        "name": "Germany",
        "value": 8940000
      },
      {
        "name": "USA",
        "value": 5000000
      },
      {
        "name": "France",
        "value": 7200000
      }
    ];
    this.multi= [
      {
        "name": "Germany",
        "series": [
          {
            "name": "2010",
            "value": 7300000
          },
          {
            "name": "2011",
            "value": 8940000
          }
        ]
      },
    
      {
        "name": "USA",
        "series": [
          {
            "name": "2010",
            "value": 7870000
          },
          {
            "name": "2011",
            "value": 8270000
          }
        ]
      },
    
      {
        "name": "France",
        "series": [
          {
            "name": "2010",
            "value": 5000002
          },
          {
            "name": "2011",
            "value": 5800000
          }
        ]
      }
    ];
    this.view = [700, 400];
     // options
     this.showXAxis = true;
     this.showYAxis = true;
     this.gradient = false;
     this.showLegend = true;
     this.showXAxisLabel = true;
     this.xAxisLabel = 'Country';
     this.showYAxisLabel = true;
     this.yAxisLabel = 'Population';
   
     this.colorScheme = {
       domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
     };
   
  }
  onSelect(event) {
    console.log(event,"this is the");
  }
}
