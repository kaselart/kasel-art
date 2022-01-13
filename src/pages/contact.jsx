import React from "react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import { navigate } from "gatsby-link";
import "../css/App.css";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...data,
      }),
    })
      .then((response) => {
        navigate("/thanks/");
        console.log(response);
      })
      .catch((error) => console.log(error));
    e.preventDefault();
  };
  return (
    <Layout>
      <section className="contact">
        <h1 className="contact__heading-primary">contact</h1>
        <form
          name="contact-form"
          method="POST"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit(onSubmit)}
          className="contact__form"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <input
            type="text"
            className="visually-hidden"
            name="bot-field"
            {...register("bot-field")}
          />
          <div className="form__element">
            <label className="visually-hidden" htmlFor="name">
              name
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              {...register("name", {
                required: "required",
              })}
            />
            {errors.name && (
              <p className="form__error-message">{errors.name.message}</p>
            )}
          </div>
          <div className="form__element">
            <label htmlFor="email" className="visually-hidden">
              email
            </label>
            <input
              name="email"
              type="text"
              placeholder="email"
              {...register("email", {
                required: "required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "enter a valid e-mail address",
                },
              })}
            />
            {errors.email && (
              <p className="form__error-message">{errors.email.message}</p>
            )}
          </div>
          {/* <div className="form__element">
            <label className="visually-hidden" htmlFor="telephone">
              telephone number:
            </label>
            <input
              name="tel"
              type="text"
              placeholder="telephone (optional)"
              {...register("tel", {
                minLength: { value: 7, message: "must be at least 7 digits" },
                pattern: {
                  value: /^([0-9]*)$/,
                  message: "enter a valid telephone number",
                },
              })}
            />
            {errors.tel && (
              <p className="form__error-message">{errors.tel.message}</p>
            )}
          </div> */}
          <div className="form__element">
            <label className="visually-hidden" htmlFor="comments">
              questions or comments:
            </label>
            <textarea
              name="message"
              type="text"
              placeholder="message"
              {...register("message", {
                required: "required",
              })}
            />
            {errors.message && (
              <p className="form__error-message">{errors.message.message}</p>
            )}
          </div>
          <input type="submit" className="btn--submit" value="SEND" />
        </form>
      </section>
    </Layout>
  );
}
