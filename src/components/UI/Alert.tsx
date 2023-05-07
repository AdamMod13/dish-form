import React from "react";
import ReactDOM from "react-dom";
import { AlertProps } from "../../models/AlertProps";

const AlertOverlay: React.FC<AlertProps> = ({ isError }) => {
  return (
    <React.Fragment>
      {isError ? (
        <div className="alert bg-red-300">
          <h2>Error occured!</h2>
        </div>
      ) : (
        <div className="alert bg-green-300">
          <h2>Success!</h2>
        </div>
      )}
    </React.Fragment>
  );
};

const Alert: React.FC<AlertProps> = ({ isError }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <AlertOverlay isError={isError} />,
        document.getElementById("modal-root")!
      )}
    </React.Fragment>
  );
};

export default Alert;
