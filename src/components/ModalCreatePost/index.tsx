import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";

interface IPostForm {
  title: string;
  content: string;
  image: File | null;
}

const CreatePostForm = () => {
  const [validated, setValidated] = useState(false);
  const [postForm, setPostForm] = useState<IPostForm>({
    title: "",
    content: "",
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

const ModalCreatePost: FC = () => {
  return (
    <div className="modal fade" id="createPost">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create Post</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <CreatePostForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCreatePost;
