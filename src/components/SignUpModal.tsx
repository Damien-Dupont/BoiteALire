import React from "react";

export interface ISignUp {}

const SignUp: React.FunctionComponent<ISignUp> = (props) => {
  return (
    <>
      <div className="position-fixed top-0 vw-100 vh-100">
        <div className="w-100 h-100 bg-dark bg-opacity-75">
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
