import { SortProps } from "../interface";

export const ITEMS_PER_PAGE = 5;

export const sortOrderOptions: SortProps[] = [
  { value: "asc", label: "Ascending" },
  { value: "desc", label: "Descending" },
];

export const sortByOptions: SortProps[] = [
  { value: "id", label: "ID" },
  { value: "date", label: "Date" },
];
