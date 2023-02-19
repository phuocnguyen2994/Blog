import { FC, useRef } from "react";

interface InputSearchProps {
  onSearchChange: (value: string) => void;
}

const InputSearch: FC<InputSearchProps> = ({ onSearchChange }) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const debounce = (fuc: (value?: string) => void, wait: number) => {
    let timer: NodeJS.Timeout;
    return (value?: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => fuc(value), wait);
    };
  };
  const handleChangeSearch = () => {
    debounceSearch();
  };
  const debounceSearch = debounce(
    () => onSearchChange(searchInputRef.current?.value || ""),
    300
  );
  return (
    <input
      ref={searchInputRef}
      onChange={handleChangeSearch}
      className="p-2"
      type="text"
      placeholder="Search"
      style={{ width: "100%" }}
    />
  );
};

export default InputSearch;
