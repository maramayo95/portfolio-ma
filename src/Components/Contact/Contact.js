import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Contact.css";

const encode = data => {
  return Object.keys(data).map(key => encodeURIComponent(key)+"="+encodeURIComponent(data[key])).join("&")
}

const Contact = () => {
  const [formSend, setformSend] = useState(false);
  
  return (
    <section id="contact">
      <div className="contact-container">
        <h3 className="h3-contact">Get in Touch</h3>

        <Formik 
          initialValues={{
            "bot-field": "",
            "form-name": "contact",
            name: "",
            phone: "",
            textArea: "",
            email: "",
          }}
          onSubmit={(values, { resetForm }) => {
            //Llamada a api que conecta y envia valores
            fetch("/", {
              method: "POST",
              headers: {"Content-Type": "application/x-www-form-urlencoded" },
              body: encode({
                "form-name": "contact-form",
                ...values
                
              })
            })
            console.log("Formulario enviado");
            console.log(values)
            resetForm();
            setformSend(true);
            setTimeout(() => {
              setformSend(false);
            }, 5000);
          }}
          validate={(values) => {
            let errObj = {};

            if (!values.name) {
              errObj.name = "Please enter a name ";
            } else if (!/^[A-Z]+$/i.test(values.name)) {
              errObj.name = "The name can't be numbers";
            }

            if (!values.phone) {
              errObj.phone = "Please enter your phone number";
            } else if (!/^[0-9]{10,10}$/.test(values.phone)) {
              errObj.phone = "The phone must contain 10 numbers";
            }

            if (!values.email) {
              errObj.email = "Please enter your email";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                values.email
              )
            ) {
              errObj.email = "The email must contain letters, numbers, . and _";
            }

            if (!values.textArea) {
              errObj.textArea = "Please leave a message";
            }

            return errObj;
          }}
        >
          {({ errors }) => (
            <Form className="form-contact" name="contact-form" method="POST">
              <Field type="hidden" name="form-name"/>
              <Field type="hidden" name="bot-field"/>
              <Field
                className="input"
                type="text"
                name="name"
                placeholder="Name"
              />

              <ErrorMessage
                name="name"
                component={() => (
                  <div className="errorDiv">
                    <p className="errors">{errors.name}</p>
                  </div>
                )}
              />

              <Field
                className="input"
                type="text"
                name="phone"
                placeholder="Phone"
              />

              <ErrorMessage
                name="phone"
                component={() => (
                  <div className="errorDiv">
                    <p className="errors">{errors.phone}</p>
                  </div>
                )}
              />

              <Field
                className="input"
                type="email"
                name="email"
                placeholder="Email"
              />

              <ErrorMessage
                name="email"
                component={() => (
                  <div className="errorDiv">
                    <p className="errors">{errors.email}</p>
                  </div>
                )}
              />

              <Field
                as="textarea"
                type="text"
                name="textArea"
                placeholder="Tell me about your project"
              />

              <ErrorMessage
                name="textArea"
                component={() => (
                  <div className="errorDiv">
                    <p className="errors">{errors.textArea}</p>
                  </div>
                )}
              />

              <button className="send"  type="submit">
                Send
              </button>
            </Form>
          )}
        </Formik>

        {formSend && (
          <div className="succesDiv">
            <p className="succes">Formulario enviado con éxtio</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
