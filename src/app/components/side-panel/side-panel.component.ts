import { Component, OnInit, Input } from '@angular/core';
import data from '../../../data.json';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  cv_data = (<any>data);
  @Input() pdfView = false;
  @Input() confidential = false;
  constructor() {
    console.log('this.cv_data:', this.cv_data);
   }

  ngOnInit() { }

}
