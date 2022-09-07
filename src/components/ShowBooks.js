import React, { useState } from "react";

// import mui

export default function ShowBooks({
  books,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newTitle, setNewTitle] = useState(books.title);

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
          value={books.title === "" ? newTitle : books.title}
          className="list"
          onChange={handleChange}
        >
          <div>
            <button
              className="btn btn-secondary ms-2"
              onClick={() => toggleComplete(books)}
              id="i"
            >
              {books.completed ? "Lu" : "En attente"}
            </button>
            <button
              className="btn btn-secondary ms-2"
              onClick={() => handleEdit(books, newTitle)}
              id="i"
            >
              Modifier
            </button>
            <button
              className="btn btn-danger ms-2"
              onClick={() => handleDelete(books.id)}
              id="i"
            >
              Supprimer
            </button>
          </div>
        </input>
      </div>
    );
  };
}

// todo.js
