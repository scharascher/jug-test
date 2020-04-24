import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportsListComponent} from './reports-list/reports-list.component';
import {ReportsItemComponent} from './reports-item/reports-item.component';
import {ReportsComponent} from './reports/reports.component';
import {ReportsApiService} from './reports-api.service';
import {ReportsFiltersComponent} from './reports-filters/reports-filters.component';
import {TagsModule} from '../shared/tags/tags.module';
import {FilterModule} from '../shared/filter/filter.module';


@NgModule({
  declarations: [ReportsListComponent,
    ReportsItemComponent,
    ReportsComponent,
    ReportsFiltersComponent],
  imports: [
    CommonModule,
    TagsModule,
    FilterModule
  ],
  exports: [
    ReportsComponent
  ],
  providers: [
    ReportsApiService
  ]
})
export class ReportsModule {
}
