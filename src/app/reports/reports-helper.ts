import {Group} from '../shared/helper';

export interface Report {
  id: number;
  author: string;
  lang: string;
  tags?: string[];
  title: string;
  complexity: Complexity;
}

export enum Complexity {
  INTERMEDIATE,
  ADVANCED,
  HARDCORE
}

export interface ReportFilter {
  author: string;
  tags: Group<boolean>;
  langs: Group<boolean>;
}


