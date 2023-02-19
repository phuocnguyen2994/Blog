import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IPost } from "../../interface";
import { onEditPost } from "../../redux/postSlice";

interface IPostForm {
  title: string;
  content: string;
  image: File | null;
}

const CreatePostForm = () => {
  const post: IPost = useAppSelector((state) => state.post);
  const [validated, setValidated] = useState(false);
  const [postForm, setPostForm] = useState<IPostForm>({
    title: post.title,
    content: post.content || "",
    image: null,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form.checkValidity());

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log(postForm);
      alert("create success");
    }

    setValidated(true);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setPostForm({ ...postForm, [name]: value });
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setPostForm({ ...postForm, image: event.target.files[0] });
    }
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          required
          type="text"
          name="title"
          placeholder="Enter post title"
          value={postForm.title}
          onChange={handleChange}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a title.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="content" className="mt-3">
        <Form.Label>Content</Form.Label>
        <Form.Control
          required
          as="textarea"
          rows={3}
          name="content"
          placeholder="Enter post content"
          value={postForm.content}
          onChange={handleChange}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a content.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="image" className="mt-3">
        <Form.Label>Image</Form.Label>
        <Form.Control
          required
          type="file"
          accept=".jpg,.jpeg,.png"
          name="image"
          onChange={handleImageChange}
          style={{ height: "auto" }}
        />
        <Form.Control.Feedback type="invalid">
          Please choose an image.
        </Form.Control.Feedback>
      </Form.Group>
      <div className="text-center">
        <Button type="submit" className="mt-5">
          Create
        </Button>
      </div>
    </Form>
  );
};

const ModalEditPost: FC = () => {
  const post = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(
      onEditPost({ title: "", content: "", image: "", createdAt: "", id: "" })
    );
  };

  return (
    <Modal show={!!post.title} onHide={handleClose}>
      <Modal.Header closeButton={false}>
        <Modal.Title>Edit Post</Modal.Title>
        <button onClick={handleClose} className="btn text-dark">
          X
        </button>
      </Modal.Header>
      <Modal.Body>
        <CreatePostForm />
      </Modal.Body>
    </Modal>
  );
};

export default ModalEditPost;
