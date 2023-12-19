import "./Contact.scss";
import { useState } from "react";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import errorImg from "../../assets/icons/error.svg";
import Input from "../../components/Input/Input";

function Contact() {
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
    <section className="contact">
      <div className="contact__container">
        <div className="contact__text">
          <h1 className="contact__title">Let's Connect!</h1>
          <p className="contact__subtitle">
            Like my code? Think we should work together? Reach out to me
            directly via{" "}
            <span className="contact__email">
              <a href="mailto:louisohara20@gmail.com" className="contact__link">
                email
              </a>
            </span>{" "}
            or using the form below:
          </p>
        </div>
        <div className="contact__form-wrapper">
          {!success && (
            <form className="contact__form" ref={form} onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                label="Name"
                onChange={handleChange}
                placeholder="John doe"
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
              <Input
                type="text"
                name="email"
                label="Email"
                onChange={handleChange}
                placeholder="Your email"
              />{" "}
              {error && !fields.email ? (
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
              {error && !isEmailValid() ? (
                <div className="contact__error-container">
                  <img
                    src={errorImg}
                    className="contact__icon"
                    alt="error icon"
                  />
                  <p className="contact__error">Please enter a valid email</p>
                </div>
              ) : (
                <></>
              )}
              <div className="field">
                <label htmlFor="message" className="field__label">
                  Message:
                </label>
                <textarea
                  className="field__input"
                  type="textarea"
                  name="message"
                  id="message"
                  onChange={handleChange}
                  placeholder="Your message"
                ></textarea>
              </div>
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
              <button className="contact__button" type="submit">
                Submit
              </button>
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
