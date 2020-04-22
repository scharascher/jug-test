import {FormGroup} from '@angular/forms';
import {Input} from '@angular/core';

export class BaseFormControl {
  @Input() parentForm: FormGroup;
  @Input() controlName: string;

  constructor() {
  }
}
