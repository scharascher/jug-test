import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ReportsApiService} from '../reports-api.service';
import {take} from 'rxjs/operators';
import {Report} from '../reports-helper';
import {Filter, FilterType} from '../../shared/filter/filter-helper';
import {Observable, zip} from 'rxjs';

@Component({
  selector: 'app-reports-filters',
  templateUrl: './reports-filters.component.html',
  styleUrls: ['./reports-filters.component.scss']
})
export class ReportsFiltersComponent implements OnInit {
  @Output() activeReports = new EventEmitter<Report[]>();
  @Input() reports: Report[];
  filters: Partial<Record<keyof Report, Filter>> = {
    author: {
      type: FilterType.INPUT,
    },
    lang: {
      type: FilterType.CHECKBOX_GROUP, values: []
    },
    tags: {
      type: FilterType.CHECKBOX_GROUP, values: []
    }
  };

  constructor(protected reportsApi: ReportsApiService) {
  }

  ngOnInit(): void {
    zip(this.getLangs(), this.getTags()).subscribe(results => {
      this.filters.lang.values = results[0];
      this.filters.tags.values = results[1];
    });
  }

  getTags(): Observable<string[]> {
    return this.reportsApi.getTags().pipe(take(1));
  }

  getLangs(): Observable<string[]> {
    return this.reportsApi.getLangs().pipe(take(1));
  }

  applyFilters(event: Report[]): void {
    this.activeReports.emit(event);
  }
}
