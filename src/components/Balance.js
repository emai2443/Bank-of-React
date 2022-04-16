import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AccountBalance from "./AccountBalance";

function Balance(props) {
  return (
    <div>
      {!props.info.currentUser.login && <Navigate to="/" />}
      {props.info.currentUser.login && (
        <>
          <div className="links">
            <Link to="/" className="loglink">
              Home
            </Link>
            <Link to="/Debits" className="loglink">
              Debits
            </Link>
            <Link to="/Credits" className="loglink">
              Credits
            </Link>
          </div>
          <h1 className="titles">
            {props.info.currentUser.userName}'s Balance
          </h1>
          <div className="balance">
            <AccountBalance accountBalance={props.info.accountBalance} />
          </div>
        </>
      )}
    </div>
  );
}

export default Balance;
