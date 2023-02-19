import { FC } from "react";

interface PaginationItemProps {
  className: string;
  text: string | number;
  onClick: () => void;
}

const PaginationItem: FC<PaginationItemProps> = ({
  className,
  onClick,
  text,
}) => {
  return (
    <li className={`page-item ${className}`}>
      <a
        className="page-link"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        style={{ cursor: "pointer" }}
      >
        {text}
      </a>
    </li>
  );
};

export default PaginationItem;
