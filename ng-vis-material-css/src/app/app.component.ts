import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import * as vis from 'vis';
import * as $ from 'jquery';
import 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('vis') element: ElementRef;
  @ViewChild('collapse') c_element: ElementRef;
  network: vis.Network;

  ngAfterViewInit(): void {
    const nodes = new vis.DataSet([
        {id: 1, label: 'Node 1'},
        {id: 2, label: 'Node 2'},
        {id: 3, label: 'Node 3'},
        {id: 4, label: 'Node 4'},
        {id: 5, label: 'Node 5'}
    ]);

    const edges = new vis.DataSet([
        {from: 1, to: 3},
        {from: 1, to: 2},
        {from: 2, to: 4},
        {from: 2, to: 5}
    ]);

    const data = {
        nodes: nodes,
        edges: edges
    };
    const options = {};

    this.network = new vis.Network(this.element.nativeElement, data, options);
    $(this.c_element.nativeElement).collapsible();
  }
}
