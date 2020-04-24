import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Filter, FilterType} from './filter-helper';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent<T> implements OnInit {
  @Input() items: Array<T>;
  @Input() filters: Partial<Record<keyof T, Filter>>;
  @Output() filtersChanged = new EventEmitter<Array<T>>();
  form: FormGroup;
  filterTypes = FilterType;

  get filterKeys(): string[] {
    if (!this.filters) {
      return [];
    }
    return Object.keys(this.filters);
  }

  constructor(protected fb: FormBuilder) {
    this.form = this.fb.group({});

    this.form.valueChanges.subscribe(val => {
      this.applyFilters();
    });
  }

  ngOnInit(): void {
    this.makeForm();
  }

  makeForm(): void {
    for (const key of this.filterKeys) {
      switch (this.filters[key].type) {
        case FilterType.CHECKBOX_GROUP:
          this.form.addControl(key, new FormGroup({}));
          break;
        case FilterType.INPUT:
          this.form.addControl(key, new FormControl(''));
          break;
      }
    }
  }

  applyFilters(): void {
    if (!this.items) {
      return;
    }
    this.filtersChanged.emit(this.getFilteredItems());
  }

  getFilteredItems(): T[] {
    const formValue = this.form.value;
    let activeItems = this.items;
    for (const key of Object.keys(formValue)) {
      activeItems = activeItems.filter(item => {
        switch (this.filters[key].type) {
          case FilterType.INPUT:
            return !formValue[key] || item[key].toLowerCase().includes(formValue[key].toLowerCase());
          case FilterType.CHECKBOX_GROUP:
            if (typeof item[key] === 'string') {
              return !Object.values(formValue[key]).includes(true) || formValue[key][item[key]];
            }
            if (Array.isArray(item[key])) {
              return !Object.values(formValue[key]).includes(true) || item[key].some(tag => formValue[key][tag]);
            }
            console.error('incorrect checkbox group type: ', key);
            return false;
        }
      });
    }
    return activeItems;
  }

  resetFilters(): void {
    this.form.reset();
  }
}
