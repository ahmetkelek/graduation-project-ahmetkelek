import React, { useState } from "react";
import "./AdminLogin.css";

function Login({ Login, error }) {
  const [details, setDetails] = useState({ name: "", password: "" }); // .. default values .. //
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <div>
      <div className="welcome">
        <h2>Lütfen Giriş Yapınız</h2>
      </div>
      <form onSubmit={submitHandler}>
        <div className="loginForm">
          <div>
            {error !== "" ? <div>{error}</div> : ""}
            <input
              placeholder="kodluyoruz"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            ></input>
          </div>
          <div>
            <input
              placeholder="bootcamp109"
              name="password"
              id="password"
              type="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            ></input>
          </div>
          <div>
            <button className="loginBtn" type="submit">
              Giriş Yap
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
