import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getImpliedNodeFormatForFile } from "typescript";
import { UserContext } from "../context/userContext";
// import { ISignUp, Iinputs } from "../@Types/lectures";

// const SignUp: React.FunctionComponent<ISignUp> = (props) => {
export default function SignInModal() {
  const { toggleModals, modalState, signIn } = useContext(UserContext);
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
      await signIn(inputs.current[0].value, inputs.current[1].value);
      setValidation("");
      toggleModals("close");
      navigate("/");
    } catch {
      setValidation("Email or password invalid");
    }
  };

  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };

  return (
    <>
      {modalState.signInModal && (
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
                  <h5 className="modal-title">🌿 S'identifier</h5>
                  <button
                    className="btn-close"
                    onClick={() => toggleModals("close")}
                  ></button>
                </div>
                <div className="modal-body">
                  <form
                    ref={formRef}
                    onSubmit={handleForm}
                    className="sign-in-form"
                  >
                    <div className="mb-3">
                      <label className="form-label" htmlFor="SignInEmail">
                        Renseignez votre email
                      </label>
                      <input
                        ref={addInputs}
                        name="email"
                        required
                        type="email"
                        className="form-control"
                        id="signInEmail"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="SignInPwd">
                        Votre mot de passe
                      </label>
                      <input
                        ref={addInputs}
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="signInPwd"
                      />
                      <p className="text-danger mt-1">{validation}</p>
                    </div>

                    <button className="btn btn-primary">C'est parti 🌿</button>
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
