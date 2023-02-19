export interface IHeading {
  name: string;
}

export interface IBlog {
  content?: string;
  createdAt: string;
  id: string;
  image: string;
  title: string;
}

export interface PaginationProps {
  totalItems: number,
  currentPage: number,
  onPageChange: (pageNumber: number) => void
}

export interface SortProps {
  value: string;
  label: string;
}

export interface IPost extends Omit<IBlog, "createdAt"> {
  createdAt?: string;
}
