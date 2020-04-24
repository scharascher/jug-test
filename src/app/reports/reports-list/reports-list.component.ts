import {Component, Input, OnInit} from '@angular/core';
import {Report} from '../reports-helper';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent implements OnInit {
  @Input() reports: Report[];
  constructor() { }

  ngOnInit(): void {
  }

}
