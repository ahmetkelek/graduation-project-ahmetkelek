import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./ApplicationForm.css";
import firebase from "../../config/firebase";
import "firebase/database";
import { storage } from "../../config/firebase";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// .. Specific Error Message START .. //

const requiredErrorMessage = "Pozitif tamsayı girmelisiniz"; // .. Error message for age value .. //
const numberErrorMessage = "Pozitif tamsayı girmelisiniz"; // .. Error message for age value .. //
const idNoMessage = "Pozitif tamsayı girmelisiniz."; // .. Error message for identity number value .. //

// .. Specific Error Message END .. //

// .. Form Validation START .. //

const SignupSchema = yup.object().shape({
  firstName: yup.string().required("Zorunlu alan."),
  lastName: yup.string().required("Zorunlu alan."),
  age: yup
    .number()
    .typeError(numberErrorMessage)
    .positive("Pozitif tamsayı girmelisiniz.")
    .required(requiredErrorMessage)
    .min(18, "Kendi adınıza bilet almak için 18 yaş veya üstünde olmalısınız.")
    .max(99, "Yaş aralığı 18-99'dur."),
  idNo: yup
    .number()
    .typeError(idNoMessage)
    .required("Zorunlu alan")
    .integer()
    .positive("Pozitif tamsayı giriniz")
    .test(
      "Is positive ?",
      "ID NO 11 karakter uzunluğunda olmalıdır.",
      (val) => !val || (val && val.toString().length === 11)
    ),
  appReason: yup.string().required("Zorunlu alan"),
  address: yup.string().required("Zorunlu alan"),
  email: yup
    .string()
    .email("Lütfen geçerli bir email adresi giriniz.")
    .required("Zorunlu alan."),
});

// ..  Form Validation END .. //

function ApplicationForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  let history = useHistory();

  // .. Form Submit START .. //

  const onSubmit = (values) => {
    const ref1 = firebase.database().ref("formValues").push(); // .. verileri formValues basligi altinda topluyor .. //
    // alert(JSON.stringify(e));
    ref1.set(values);
    let key = ref1.set(values);
    values.id = key; // .. random id veriyor firebase .. //
    ref1.set(values);
    history.push(
      "/Status",
      alert(
        `${ref1.key} -- Bu kodla başvurunuzun durumunu kontrol edebilirsiniz.`
      )
    ); // .. it directs you to the form detail page and gives the code .. //

    reset(); // .. resets the form. .. //
  };

  // // .. Form Submit END .. //

  return (
    <div>
      <h1 className="title">Bilet almak için lütfen formu doldurunuz.</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="appForm">
        <input
          placeholder="Adınız"
          name="firstName"
          {...register("firstName")}
        />
        {errors.firstName && (
          <p className="error">{errors.firstName.message}</p>
        )}
        <br />
        <br />
        <input
          placeholder="Soyadınız"
          name="lastName"
          {...register("lastName")}
        />
        {errors.lastName && <p className="error">{errors.lastName.message}</p>}
        <br />
        <br />
        <input
          placeholder="Yaşınız"
          name="age"
          type="number"
          {...register("age")}
        />
        {errors.age && <p className="error">{errors.age.message}</p>}
        <br />
        <br />
        <input
          placeholder="ID NO"
          type="number"
          name="idNo"
          {...register("idNo")}
        />
        {errors.idNo && <p className="error">{errors.idNo.message}</p>}
        <br />
        <br />
        <input
          placeholder="Başvuru Nedeni"
          name="appReason"
          {...register("appReason")}
        />
        {errors.appReason && (
          <p className="error">{errors.appReason.message}</p>
        )}
        <br />
        <br />
        <input placeholder="Adres" name="address" {...register("address")} />
        {errors.address && <p className="error">{errors.address.message}</p>}
        <br />
        <br />
        <input placeholder="Email" {...register("email")} />
        {errors.email && <p className="error">{errors.email.message}</p>}
        <br />
        <br />
        <br />
        <br />
        <button className="sendButton">
          <span>Onayla</span>
        </button>
      </form>
      <br />
      <br />
    </div>
  );
}

export default ApplicationForm;
