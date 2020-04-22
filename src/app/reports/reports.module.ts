import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportsListComponent} from './reports-list/reports-list.component';
import {ReportsItemComponent} from './reports-item/reports-item.component';
import {ReportsComponent} from './reports/reports.component';
import {ReportsApiService} from './reports-api.service';
import {ReportsFiltersComponent} from './reports-filters/reports-filters.component';
import {TagsModule} from '../shared/tags/tags.module';
import {InputModule} from '../shared/input/input.module';
import {CheckboxGroupModule} from '../shared/checkbox-group/checkbox-group.module';
import {ButtonModule} from '../shared/button/button.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ReportsListComponent,
    ReportsItemComponent,
    ReportsComponent,
    ReportsFiltersComponent],
  imports: [
    CommonModule,
    TagsModule,
    InputModule,
    CheckboxGroupModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
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
