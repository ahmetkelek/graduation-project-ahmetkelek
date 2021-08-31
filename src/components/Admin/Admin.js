import React, { useState } from "react";
import FormValues from '../FormValues/FormValues'
import LoginPage from "./LoginPage";

function Admin() {
  // .. admin login info .. //

  const adminUser = {
    name: "kodluyoruz",
    password: "bootcamp109",
  };

  // .. admin login info .. //

  const [login, setLogin] = useState({ userName: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.password === adminUser.password &&
      details.name === adminUser.name
    ) {
      console.log("logged in"); // .. logged in message  .. //
      setLogin({
        name: details.name,
        password: details.password,
      });
    } else {
      console.log("details do not match"); // .. not logged in alert message .. //
      setError(<h3 className="errMsg">Kullanıcı adı veya şifre hatalı !</h3>); // .. not logged in alert message .. //
    }
  };

  const Logout = () => {
    console.log("Log out");
    if (window.confirm("Çıkış yapmak istediğinize emin misiniz ?")) {  // .. alert message .. //
      setLogin({
        name: "",
        password: "",
      });
    }
  };

  return (
    <div>
      {login.password !== "" ? (
        <div>
          <h2>
            Hoşgeldin<span> {login.name}</span>
            <br />
            <br />
            <button className="logout" onClick={Logout}>
              Çıkış Yap
            </button>
          </h2>
          <FormValues />{" "}
          {/* admin login olduktan sonra form verileri ekrana basiliyor.*/}
        </div>
      ) : (
        <LoginPage Login={Login} error={error} />
      )}
    </div>
  );
}

export default Admin;
