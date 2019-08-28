import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  title = 'ngchart';
  chart="bar";

  constructor() { }

  ngOnInit() {
  }

}
