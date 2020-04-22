import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseFormControl} from '../base-form-control';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends BaseFormControl implements OnInit {
  @Input() name;
  @Input() value;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
}
