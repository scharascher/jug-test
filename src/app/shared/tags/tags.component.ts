import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsComponent implements OnChanges {
  @Input() tags: string[];
  public preparedTags;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tags) {
      this.preparedTags = this.tags.map(tag => '#' + tag).join(', ');
    }
  }

}
