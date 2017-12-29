import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})

export class GraphComponent implements OnInit, AfterViewInit {

  data: any;

  constructor(
    private DataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.data = this.DataService.getData();
  }

  ngAfterViewInit(): void {

  }

}
