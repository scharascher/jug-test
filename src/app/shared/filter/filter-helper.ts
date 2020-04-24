export interface Filter {
  type: FilterType;
  values?: any;
}

export enum FilterType {
  CHECKBOX_GROUP,
  INPUT
}
