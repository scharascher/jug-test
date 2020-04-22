import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxGroupComponent } from './checkbox-group.component';
import {CheckboxModule} from '../checkbox/checkbox.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [CheckboxGroupComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CheckboxGroupComponent
  ]
})
export class CheckboxGroupModule { }
