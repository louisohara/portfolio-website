import "./Contact.scss";
import { useState } from "react";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import errorImg from "../../assets/icons/error.svg";
import Input from "../../components/Input/Input";

function Contact({ toggleDarkMode }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const form = useRef();

  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  const isFormValid = () => {
    if (!fields.name || !fields.message || !fields.email) {
      return false;
    }
    return true;
  };
  const isEmailValid = () => {
    if (!fields.email.includes("@")) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid()) {
      setError(true);
      return;
    } else {
      setError(false);
      try {
        const response = await emailjs.sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        );
        if (response.status === 200) {
          setSuccess(true);
          setFields();
        }
      } catch (error) {
        console.error(error);
        setError(error.response.data);
      }
    }
  };

  return (
    <section className={toggleDarkMode ? "contact contact--dark" : "contact"}>
      <div className="contact__container">
        <div className="contact__text">
          <h1 className="contact__title">Let's Connect!</h1>
          <p className="contact__subtitle">
            <span className="contact__span">
              Like my code? Think we should work together?{" "}
            </span>
            <br />
            Reach out to me directly via{" "}
            <span className="contact__email">
              <a
                href="mailto:louisohara20@gmail.com"
                className={
                  toggleDarkMode
                    ? "contact__link contact__link--dark"
                    : "contact__link"
                }
              >
                email
              </a>
            </span>{" "}
            or using the form below:
          </p>
        </div>
        <div className="contact__form-wrapper">
          {!success && (
            <form className="contact__form" ref={form} onSubmit={handleSubmit}>
              <div className="contact__flex">
                <div className="contact__wrapper">
                  <Input
                    type="text"
                    name="name"
                    label="Name"
                    onChange={handleChange}
                    placeholder="Ada Lovelace"
                    alt={error && !fields.name ? "error" : ""}
                    toggleDarkMode={toggleDarkMode}
                  />
                  {error && !fields.name ? (
                    <div className="contact__error-container">
                      <img
                        src={errorImg}
                        className="contact__icon"
                        alt="error icon"
                      />
                      <p className="contact__error">This field is required</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="contact__wrapper">
                  <Input
                    type="text"
                    name="email"
                    label="Email"
                    onChange={handleChange}
                    placeholder="lovelace@gmail.com"
                    alt={error && !fields.email ? "error" : ""}
                    toggleDarkMode={toggleDarkMode}
                  />{" "}
                  {(error && !fields.email) || (error && !isEmailValid()) ? (
                    <div className="contact__error-container">
                      <img
                        src={errorImg}
                        className="contact__icon"
                        alt="error icon"
                      />
                      <p className="contact__error">
                        {fields.email
                          ? "Please enter a valid email"
                          : "This field is required"}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="contact__message field">
                <label htmlFor="message" className="field__label">
                  Message
                </label>
                <textarea
                  className={`field__input  field__input--textarea ${
                    error && !fields.message ? "field__input--error" : ""
                  } ${toggleDarkMode ? `field__input--dark` : ``}`}
                  type="textarea"
                  name="message"
                  id="message"
                  onChange={handleChange}
                  placeholder="Let's talk about..."
                ></textarea>

                {error && !fields.message ? (
                  <div className="contact__error-container">
                    <img
                      src={errorImg}
                      className="contact__icon"
                      alt="error icon"
                    />
                    <p className="contact__error">This field is required</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="contact__button-container">
                <button
                  className={
                    toggleDarkMode
                      ? `contact__button--dark contact__button`
                      : `contact__button`
                  }
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          )}
          {success && (
            <div className="contact__success">
              <h3 className="contact__success-title">
                Thanks for being in touch!
              </h3>
              <p className="contact__success-message">
                Your email was sent successfully
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
