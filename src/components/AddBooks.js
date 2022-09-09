import { FirebaseError } from "firebase/app";
import React, { useState, useRef, useContext } from "react";
import { db } from "../firebase-config.ts";
import { collection, addDoc } from "firebase/firestore";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function AddBooks() {
  const { toggleModals, modalState, bookToAdd } = useContext(UserContext);
  const navigate = useNavigate();

  const [validation, setValidation] = useState("");

  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await bookToAdd(inputs.current[0].value, inputs.current[1].value);
      setValidation("");
      toggleModals("close");
      navigate("/");
    } catch {
      setValidation("Titre ou Auteur invalide(s) ou manquant(s)");
    }
  };

  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };

  // const [title, setTitle] = useState("");
  // //   const [author, setAuthor] = useState("");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (title !== "") {
  //     await addDoc(collection(db, "books"), {
  //       title,
  //       // author,
  //       completed: false,
  //       // comment: null,
  //     });
  //     setTitle("");
  //   }
  // };

  return (
    // <form onSubmit={handleSubmit}>
    //   <div className="input_container">
    //     <input
    //       type="text"
    //       placeholder="Enter title"
    //       value={title}
    //       onChange={(e) => setTitle(e.target.value)}
    //     />
    //   </div>
    //   <div className="btn_container">
    //     <button>Add</button>
    //   </div>
    // </form>
    <>
      {modalState.addBookModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            className="w-100 h-100 bg-dark bg-opacity-75"
            onClick={() => toggleModals("close")}
          ></div>
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    <span role="img" aria-label="bookpile">
                      🪴
                    </span>{" "}
                    Ajouter un livre
                  </h5>
                  <button
                    className="btn-close"
                    onClick={() => toggleModals("close")}
                  ></button>
                </div>
                <p className="modal-body">
                  Les branches de l'arbre à lire poussent chaque jour. Ajoutez
                  un livre pour pouvoir le commenter et donner des idées à
                  d'autres lecteurs:
                </p>
                <div className="modal-body">
                  <form
                    ref={formRef}
                    onSubmit={handleForm}
                    className="sign-in-form"
                  >
                    <div className="mb-3">
                      <label className="form-label" htmlFor="bookTitleAdd">
                        Renseignez le titre du livre
                      </label>
                      <input
                        ref={addInputs}
                        name="bookToAddTitle"
                        required
                        type="text"
                        className="form-control"
                        id="bookTitleAdd"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="bookAuthorAdd">
                        Renseignez le nom de l'auteur / autrice
                      </label>
                      <input
                        ref={addInputs}
                        name="authorToAdd"
                        required
                        type="text"
                        className="form-control"
                        id="bookAuthorAdd"
                      />
                      <p className="text-danger mt-1">{validation}</p>
                    </div>

                    <button className="btn btn-primary">Ajouter 🌿</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// addTodo.js
