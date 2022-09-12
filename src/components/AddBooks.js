import { FirebaseError } from "firebase/app";
import React, { useState, useRef, useContext } from "react";
import { db } from "../firebase-config.ts";
import { collection, addDoc } from "firebase/firestore";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function AddBooks() {
  const { toggleModals, modalState } = useContext(UserContext);
  const navigate = useNavigate();

  const [validation, setValidation] = useState("");

  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const formRef = useRef();

  const handleNew = async (e) => {
    e.preventDefault();

    const collectionRef = collection(db, "books");
    const payload = {
      titre: inputs.current[0].value,
      auteur: inputs.current[1].value,
    };
    try {
      await addDoc(collectionRef, payload);

      setValidation("");
      toggleModals("close");
      navigate("/");
    } catch {
      setValidation("Titre ou Auteur invalide(s) ou manquant(s)");
    }
  };

  return (
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
                    <span role="img" aria-label="plant">
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
                    onSubmit={handleNew}
                    className="add-book-form"
                  >
                    <div className="mb-3">
                      <label className="form-label" htmlFor="bookTitleAdd">
                        Renseignez le titre du livre
                      </label>
                      <input
                        ref={addInputs}
                        name="bookTitleToAdd"
                        required
                        type="text"
                        className="form-control"
                        id="bookTitleAdd"
                        placeholder="Le Guide du Voyageur Galactique"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="bookAuthorToAdd">
                        Renseignez le nom de l'auteur / autrice
                      </label>
                      <input
                        ref={addInputs}
                        name="bookAuthorToAdd"
                        required
                        type="text"
                        placeholder="Douglas Adams"
                        className="form-control"
                        id="bookAuthorToAdd"
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
