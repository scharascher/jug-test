import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Complexity, Report} from '../reports-helper';

@Component({
  selector: 'app-reports-item',
  templateUrl: './reports-item.component.html',
  styleUrls: ['./reports-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsItemComponent implements OnInit {
  @Input() report: Report;
  complexity: typeof Complexity;

  constructor() {
    this.complexity = Complexity;
  }

  ngOnInit(): void {
  }
}
