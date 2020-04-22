import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ReportsApiService} from '../reports-api.service';
import {Report} from '../reports-helper';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsListComponent implements OnInit {
  @Input() reports: Report[];
  constructor() { }

  ngOnInit(): void {
  }

}
