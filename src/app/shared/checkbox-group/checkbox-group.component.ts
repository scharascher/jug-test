import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent implements OnInit, OnChanges {
  @Input() items: string[];
  @Input() parentForm: FormGroup;
  @Input() controlName: string;
  checkedItems: string[];
  formGroup: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.checkedItems = [];
    this.formGroup = this.parentForm.get(this.controlName) as FormGroup;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items && changes.items.currentValue) {
      for (const item of this.items) {
        this.formGroup.addControl(item, new FormControl(false));
      }
    }
  }
}
