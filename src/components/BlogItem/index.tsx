import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { IBlog } from "../../interface";
import { onEditPost } from "../../redux/postSlice";

const BlogItem: FC<IBlog> = ({ id, image, title, content }) => {
  const dispatch = useAppDispatch();
  const handleEdit = () => {
    dispatch(onEditPost({ id, image, title, content }));
  };
  return (
    <li
      className="media my-4 text-dark border rounded d-flex"
      style={{ height: 200 }}
    >
      <img
        src={image}
        className="mr-3 rounded h-100"
        alt={title}
        style={{ flex: "0 0 100", width: 200 }}
      />
      <div className="media-body text-dark py-3 d-flex flex-column h-100">
        <div>
          <h5 className="mt-0 mb-1">{title}</h5>
          <p>{content}</p>
        </div>
        <div className="d-flex mt-auto">
          <Link to={`blog/${id}`}>
            <button className="btn btn-info">View</button>
          </Link>
          <button className="btn btn-light ml-2" onClick={handleEdit}>
            Edit
          </button>
        </div>
      </div>
    </li>
  );
};

export default memo(BlogItem);
