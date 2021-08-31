import { useHistory } from "react-router-dom";
import './style.css'
import React from "react";

function ErrorPage() {
  let history = useHistory();

  function goBack() {
    history.push("./QueryForm"); // .. push queryForm .. //
  }

  return (
    <div className="error-container">
      <br />
      <br />
      <h1 className="errorPage"> 404 </h1>
      
      <h3 className="errorPage"> Bu sayfa bulunamadı. </h3>
      <h2 className="errorPageTitle">
        Bu numarayla ilgili kayıt bulunumadı.
      </h2>
      <br />
      <button type="button" className="back" onClick={goBack}>
        <span>Geri</span>
      </button>
    </div>
  );
}

export default ErrorPage;
