import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { toUnicode } from "punycode";

export default function Books({
  book,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newTitle, setNewTitle] = useState(book.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (books.complete === true) {
      setNewTitle(books.title);
    } else {
      books.title = "";
      setNewTitle(e.target.value);
    }
    return (
      <div className="book">
        <input
          style={{ textDecoration: books.completed && "line-through" }}
          type="text"
          value={books.title}
          className="list"
          onChange={handleChange}
        >
          <div>
            <button
              className="button-complete"
              onClick={() => toggleComplete(books)}
            >
              <CheckCircleIcon id="i" />
            </button>
            <button
              className="button-edit"
              onClick={() => toggleComplete(books, newTitle)}
            >
              <EditIcon id="i" />
            </button>
            <button
              className="button-delete"
              onClick={() => toggleComplete(books.id)}
            >
              <DeleteIcon id="i" />
            </button>
          </div>
        </input>
      </div>
    );
  };
}
