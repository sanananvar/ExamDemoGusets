import axios from "axios";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
const AddProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  desc: Yup.string().required("Required"),


  image: Yup.string()
    .url()
    .url("Invalid URL")
    .required("Required")
    .min(5, "Too Short!")
    .max(10000, "Too Long!"),
});

function Add() {
  const navigate = useNavigate();

  const formStyle = {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  };

  const fieldStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  };

  const buttonStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
    marginTop: "-8px",
    marginBottom: "10px",
  };

  return (
    <>
    <Helmet>
      <title>Admin Add Page</title>
    </Helmet>
    

      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Add New Guest Card
      </h1>
      <Formik
        initialValues={{
          name: "",
          desc: "",
          image: "",
        }}
        validationSchema={AddProductSchema}
        onSubmit={(values) => {
          axios
            .post("http://localhost:3000/products5", values)
            .then(() => navigate("/"));
        }}
      >
        {({ errors, touched }) => (
          <Form style={formStyle}>
            <label htmlFor="name">name</label>
            <Field name="name" placeholder="Enter name" style={fieldStyle} />
            {errors.name && touched.name ? (
              <div style={errorStyle}>{errors.name}</div>
            ) : null}
           
            <label htmlFor="desc">description</label>
            <Field
              name="desc"
              placeholder="Enter description"
              style={fieldStyle}
            />
            {errors.desc && touched.desc ? (
              <div style={errorStyle}>{errors.desc}</div>
            ) : null}

            <label htmlFor="image">Image URL</label>
            <Field
              name="image"
              placeholder="Enter image URL"
              style={fieldStyle}
            />
            {errors.image && touched.image ? (
              <div style={errorStyle}>{errors.image}</div>
            ) : null}

            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Add;