import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import {InputModule} from '../input/input.module';
import {CheckboxGroupModule} from '../checkbox-group/checkbox-group.module';
import {ButtonModule} from '../button/button.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [FilterComponent],
  imports: [
    CommonModule,
    InputModule,
    CheckboxGroupModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FilterComponent
  ]
})
export class FilterModule { }
