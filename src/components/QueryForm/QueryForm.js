import { useHistory } from "react-router-dom";
import './style.css'
import React from "react";

function QueryForm() {
  let history = useHistory();

  function handleClick() {
    history.push("./ErrorPage");
  }

  return (
    <div>
      <div>
        <h1 className="queryTitle">Başvuru durumunu sorgula.</h1>
      </div>
      <input
        type="text"
        className="queryForm"
        placeholder="Başvuru numaranızı giriniz."
      ></input>
      <br />
      <br/>
      <br/>
      <button type="button" className="queryBtn" onClick={handleClick}>
        <span>Gönder</span>
      </button>
    </div>
  );
}
export default QueryForm;
