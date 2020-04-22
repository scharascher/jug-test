import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ReportsApiService} from '../reports-api.service';
import {take} from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ReportFilter} from '../reports-helper';

@Component({
  selector: 'app-reports-filters',
  templateUrl: './reports-filters.component.html',
  styleUrls: ['./reports-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsFiltersComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<ReportFilter>();
  tags: string[];
  langs: string[];
  form: FormGroup;

  constructor(protected fb: FormBuilder,
              protected reportsApi: ReportsApiService,
              protected detectionRef: ChangeDetectorRef) {
    this.form = this.fb.group({
      author: new FormControl(''),
      tags: this.fb.group({}),
      langs: this.fb.group({})
    });

    this.form.valueChanges.subscribe(val => {
      this.applyFilters();
    });
  }

  ngOnInit(): void {
    this.getTags();
    this.getLangs();
  }

  getTags(): void {
    this.reportsApi.getTags().pipe(take(1)).subscribe(tags => {
      this.tags = tags;
      this.detectionRef.detectChanges();
    });
  }

  getLangs(): void {
    this.reportsApi.getLangs().pipe(take(1)).subscribe(langs => {
      this.langs = langs;
      this.detectionRef.detectChanges();
    });
  }

  applyFilters(): void {
    this.filtersChanged.emit(this.form.value);
  }

  resetFilters(): void {
    this.form.reset();
  }
}
