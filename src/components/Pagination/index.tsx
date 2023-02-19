import { FC } from "react";
import { ITEMS_PER_PAGE } from "../../constants";
import { PaginationProps } from "../../interface";
import PaginationItem from "../PaginationItem";

const Pagination: FC<PaginationProps> = ({
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const maxButtons = 5;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const halfMaxButtons = Math.floor(maxButtons / 2);
    const startPage =
      currentPage <= halfMaxButtons ? 1 : currentPage - halfMaxButtons;
    const endPage =
      currentPage >= totalPages - halfMaxButtons
        ? totalPages
        : currentPage + halfMaxButtons;

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PaginationItem
          onClick={() => onPageChange(i)}
          className={i === currentPage ? "active" : ""}
          text={i}
          key={i}
        />
      );
    }

    return pageNumbers;
  };

  return (
    <nav>
      <ul className="pagination d-flex justify-content-center">
        <PaginationItem
          text="Previous"
          className={currentPage === 1 ? "disabled" : ""}
          onClick={() => onPageChange(currentPage - 1)}
        />
        <PaginationItem
          text="First"
          className={currentPage === 1 ? "disabled" : ""}
          onClick={() => onPageChange(1)}
        />
        {renderPageNumbers()}
        <PaginationItem
          text="Last"
          className={currentPage === 1 ? "disabled" : ""}
          onClick={() => onPageChange(totalPages)}
        />
        <PaginationItem
          text="Next"
          className={currentPage === totalPages ? "disabled" : ""}
          onClick={() => onPageChange(currentPage + 1)}
        />
      </ul>
    </nav>
  );
};

export default Pagination;
