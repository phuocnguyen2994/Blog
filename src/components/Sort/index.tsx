import { ChangeEvent, FC } from "react";

import { SortProps } from "../../interface";

interface ISortProps {
  sortOptions: SortProps[];
  onSortChange: (value: string) => void;
  label: string;
}

const Sort: FC<ISortProps> = ({ sortOptions, onSortChange, label }) => {
  const handleSortFieldChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value);
  };
  return (
    <div className="d-flex align-items-center mt-3 mt-sm-0">
      <label className="m-0">{label}:</label>
      <select
        className="ml-2 p-2"
        onChange={handleSortFieldChange}
        style={{ height: 44, flex: 1 }}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
