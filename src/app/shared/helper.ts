export type Group<T> = {
  [key in string | number]: T;
};
