import { useState } from "react";
import { useNavigate } from "react-router";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = { title, body };

    fetch("http://localhost:8000/notes/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add New Note</h2>
      <form onSubmit={handleSubmit}>
        <label>Note title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Note body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button>Add Note</button>
      </form>
    </div>
  );
};

export default Create;
