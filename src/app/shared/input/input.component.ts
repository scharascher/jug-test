import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseFormControl} from '../base-form-control';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends BaseFormControl implements OnInit {
  @Input() placeholder: string;
  value: string;

  constructor() {
    super();
    this.placeholder = '';
  }

  ngOnInit(): void {
  }
}
