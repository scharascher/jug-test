import {Component, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';
import {ReportsApiService} from '../reports-api.service';
import {Report} from '../reports-helper';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  reports: Report[];
  activeReports: Report[];

  constructor(private reportsApi: ReportsApiService) {
  }

  ngOnInit(): void {
    this.reportsApi.getReports().pipe(take(1)).subscribe(reports => {
      this.reports = reports;
      this.activeReports = this.reports;
    });
  }

  setActiveReports(event: Report[]): void {
    this.activeReports = event;
  }
}
