import { FC, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../apis/axiosClient";
import { IBlog } from "../../interface";

const BlogDetail: FC = () => {
  const { pid } = useParams();
  const [blog, setBlog] = useState<IBlog>();

  const getBlog = async () => {
    const res: IBlog = await axiosClient.get(
      `https://5f55a98f39221c00167fb11a.mockapi.io/blogs/${pid}`
    );
    if (res) setBlog(res);
  };

  useEffect(() => {
    getBlog();
  }, []);

  const dateTime = useMemo(() => {
    if (blog?.createdAt) {
      const time = new Date(blog?.createdAt);
      return `${time.getDate()} ${time.getMonth() + 1} ${time.getFullYear()}`;
    }
  }, [blog?.createdAt]);

  return (
    <div>
      {blog ? (
        <article className="container">
          <img
            src={blog.image}
            alt=""
            className="img-fluid mb-3"
            style={{ width: "100%" }}
          />
          <div className="post-content">
            <h3>{blog.title}</h3>
            <p>{dateTime}</p>
            <p>{blog.content}</p>
          </div>
        </article>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
