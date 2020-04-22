import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';
import {ReportsApiService} from '../reports-api.service';
import {Report, ReportFilter} from '../reports-helper';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsComponent implements OnInit {
  reports: Report[];
  activeReports: Report[];

  constructor(private reportsApi: ReportsApiService, private detectionRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.reportsApi.getReports().pipe(take(1)).subscribe(reports => {
      this.reports = reports;
      this.activeReports = this.reports;
      this.detectionRef.detectChanges();
    });
  }

  onFiltersChange(filters: ReportFilter): void {
    this.activeReports = this.reports
      .filter(report => (!Object.values(filters.tags).includes(true) || report.tags.some(tag => filters.tags[tag]))
        && (!Object.values(filters.langs).includes(true) || filters.langs[report.lang])
        && (!filters.author || report.author.includes(filters.author)));
  }
}
