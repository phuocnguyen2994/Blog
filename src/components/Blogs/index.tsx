import { FC, useEffect, useState } from "react";
import axiosClient from "../../apis/axiosClient";
import {
  ITEMS_PER_PAGE,
  sortByOptions,
  sortOrderOptions,
} from "../../constants";
import { IBlog } from "../../interface";
import BlogItem from "../BlogItem";
import InputSearch from "../InputSearch";
import ModalCreatePost from "../ModalCreatePost";
import ModalEditPost from "../ModalEditPost";
import Pagination from "../Pagination";
import Sort from "../Sort";

interface FiltersProps {
  sortBy: string;
  order: string;
  search: string;
}

const Blogs: FC = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<FiltersProps>({
    sortBy: "id",
    order: "asc",
    search: "",
  });
  const firstItemIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentItems = blogs.slice(
    firstItemIndex,
    firstItemIndex + ITEMS_PER_PAGE
  );

  const getBlogs = async () => {
    setIsLoading(true);
    const res: IBlog[] = await axiosClient.get(
      "https://5f55a98f39221c00167fb11a.mockapi.io/blogs",
      {
        params: filters,
      }
    );
    if (res) {
      setBlogs(res);
      setIsLoading(false);
    }
  };

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleChangeSortBy = (value: string) => {
    setFilters({ ...filters, sortBy: value });
  };

  const handleChangeOrder = (value: string) => {
    setFilters({ ...filters, order: value });
  };

  const handleChangeKeyword = (value: string) => {
    setCurrentPage(1);
    setFilters({ ...filters, search: value });
  };

  useEffect(() => {
    getBlogs();
  }, [filters]);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between">
          <h1 className="display-3">Blog</h1>
          <button
            data-toggle="modal"
            data-target="#createPost"
            className="btn btn-primary align-self-center"
          >
            Create Post
          </button>
        </div>
        <div className="row justify-content-between">
          <div className="col-sm">
            <InputSearch onSearchChange={handleChangeKeyword} />
          </div>
          <div className="col-sm-auto col-6">
            <Sort
              onSortChange={handleChangeSortBy}
              label="Sort By"
              sortOptions={sortByOptions}
            />
          </div>
          <div className="col-sm-auto col-6">
            <Sort
              onSortChange={handleChangeOrder}
              label="Order"
              sortOptions={sortOrderOptions}
            />
          </div>
        </div>
        <ul className="list-unstyled">
          {isLoading ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: 500 }}
            >
              <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden"></span>
              </div>
            </div>
          ) : currentItems.length > 0 ? (
            <>
              {currentItems.map((blog: IBlog) => (
                <BlogItem {...blog} key={blog.id} />
              ))}
              {blogs.length > 5 && (
                <Pagination
                  totalItems={blogs.length}
                  currentPage={currentPage}
                  onPageChange={onPageChange}
                />
              )}
            </>
          ) : (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: 500 }}
            >
              Empty
            </div>
          )}
        </ul>
      </div>
      <ModalCreatePost />
      <ModalEditPost />
    </>
  );
};

export default Blogs;
