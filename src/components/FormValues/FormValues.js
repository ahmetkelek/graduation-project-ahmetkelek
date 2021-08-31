import React, { useState, useEffect } from "react";
import firebase from "../../config/firebase";
import "firebase/database";
import "./style.css";

export default function FormValues() {
  const [dataFormValues, setDataFormValues] = useState();

  useEffect(() => {
    const formData = firebase.database().ref("formValues");
    formData.on("value", (snapshot) => {
      const datas = snapshot.val();
      let dataFormValues = [];
      for (let id in datas) {
        dataFormValues.push({ id, ...datas[id] });
      }
      setDataFormValues(dataFormValues);
    });
  }, []);

  // .. Delete Item START .. //
  const deleteItem = (id) => {
    if (window.confirm("Bu kaydı silmek istediğinize emin misiniz ?")) {
      // .. question alert .. //
      const appRef = firebase.database().ref("/formValues").child(id); // ..  delete by id .. //
      appRef.remove(); // .. remove item .. //
    }
  };

  // .. Delete Item END .. //

  // .. Approved Option START .. //

  const Approve = (id) => {
    if (window.confirm("Onaylamak istediğinize emin misiniz ?")) {
      // .. alert window .. //
      const db = firebase.database().ref("formValues").child(id);
      db.update({
        Status: "Onaylandi", // .. status message .. //
      });
    }
  };

  // .. Approved Option END .. //

  // .. Not Approved Option START .. //

  const notApproved = (a) => {
    if (window.confirm("Onaylamak istemediğinize emin misiniz ?")) {
      // .. alert window .. //
      const db = firebase.database().ref("formValues").child(a);
      db.update({
        Status: "Onaylanmadi", // .. status message .. //
      });
    }
  };

  // .. Not Approved Option END .. //

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>İsim</th>
          <th>Soyisim</th>
          <th>Yaş</th>
          <th>ID NO</th>
          <th>Başvuru Nedeni</th>
          <th>Adres</th>
          <th>Email</th>
          <th>Başvuru Durumu</th>
        </tr>
      </thead>
      <tbody>
        {dataFormValues
          ? dataFormValues.map((data, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.age}</td>
                <td>{data.idNo}</td>
                <td>{data.appReason}</td>
                <td>{data.address}</td>
                <td>{data.email}</td>
                <td>
                  <button
                    className="aprooved"
                    onClick={() => {
                      Approve(data.id); // .. approve by id onClick .. //
                    }}
                  >
                    Onayla
                  </button>
                  <button
                    className="notApproved"
                    onClick={() => {
                      notApproved(data.id); // ..  not approve by id onClick .. //
                    }}
                  >
                    Onaylama
                  </button>
                  <button
                    className="delete"
                    onClick={() => {
                      deleteItem(data.id); // .. delete by id onClick .. //
                    }}
                  >
                    Kaydı Sil
                  </button>
                </td>
              </tr>
            ))
          : ""}
      </tbody>
    </table>
  );
}
