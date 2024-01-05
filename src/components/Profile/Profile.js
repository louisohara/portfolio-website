import CV from "../../assets/files/louis-ohara-resume.pdf";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import userIcon from "../../assets/icons/user.svg";
import "./Profile.scss";

function Profile({ toggleDarkMode }) {
  return (
    <section className={toggleDarkMode ? "profile profile--alt" : "profile"}>
      <div className="profile__container">
        <div className="profile__flip-container">
          <div className="profile__card">
            <div className="profile__front"></div>
            <div
              className={
                toggleDarkMode
                  ? "profile__back profile__back--alt"
                  : "profile__back"
              }
            >
              <div className="profile__logo">
                <svg id="logo-small" fill="none" viewBox="0 0 64 63">
                  <circle cx="31.8" cy="31.66" r="31.23" fill="#4a4e69" />
                  <g fill="#FAFCFF">
                    <path d="M31.8 46.37a7.42 7.42 0 0 1-4.12 2.75c-.36.09-.7.12-1.06.12h-3.37c-.38.01-.75-.03-1.11-.14a2.02 2.02 0 0 1-1.35-1.51c-.1-.51-.16-1.72-.16-3.7v-9.84c0-2.28.08-3.68.22-4.3.16-.7.5-1.18 1-1.44.39-.17.8-.28 1.23-.3l-.01-.25h-8l-.02.25a3.3 3.3 0 0 1 1.31.34c.48.28.8.79.96 1.51.13.65.2 2 .2 4.19v8.97c0 2.28-.07 3.69-.2 4.33a2.36 2.36 0 0 1-1 1.58c-.31.2-.76.35-1.38.42l.01.25h18.03v-5.27l-.24-.04c-.2.75-.51 1.45-.95 2.08Z" />
                    <path d="M42.16 47.63c-.15-.62-.22-2.01-.22-4.3V31.96a12.75 12.75 0 1 0-19.48-6.74 1.5 1.5 0 1 0 .02-.87 12.52 12.52 0 1 1 19.46 7.3v-3.88c0-2.29.07-3.69.21-4.3.16-.7.5-1.18 1-1.45.39-.17.8-.28 1.24-.3l-.02-.25h-7.99l-.01.25c.61.07 1.04.18 1.31.34.48.28.8.79.96 1.52.13.64.2 2 .2 4.17v5.53c-2.7.95-5.64.95-8.33 0v-5.52c0-2.29.07-3.68.21-4.3.16-.7.5-1.18 1-1.44.4-.18.81-.28 1.24-.3l-.01-.25h-8v.25c.6.07 1.03.18 1.3.34.48.28.81.79.96 1.52.13.64.2 2 .2 4.17v9.29c0 2.18-.07 3.55-.2 4.18-.14.73-.48 1.23-.96 1.51-.27.16-.7.28-1.3.34v.25h8v-.25a3.5 3.5 0 0 1-1.22-.3c-.5-.26-.84-.74-1-1.44-.15-.62-.22-2.02-.22-4.3v-3.49c2.7.93 5.62.93 8.32 0v9.8c0 2.17-.07 3.54-.2 4.17-.14.73-.47 1.23-.96 1.52-.27.16-.7.27-1.3.34v.24h8l.01-.24a3.5 3.5 0 0 1-1.23-.3c-.49-.26-.83-.74-1-1.44ZM31.6 43l.18.08H26.1l.27-.13c.56-.33.91-.9 1.07-1.68.14-.67.2-2.05.2-4.23v-9.28c0-2.17-.06-3.56-.2-4.23-.16-.78-.51-1.35-1.07-1.68-.09-.05-.17-.1-.27-.13h5.68l-.18.08c-.57.3-.95.85-1.13 1.6-.15.65-.22 2.08-.22 4.36v9.28c0 2.28.07 3.7.22 4.35.19.76.56 1.31 1.13 1.62Zm5.94 6.36c.09-.03.18-.07.26-.12.56-.33.92-.9 1.08-1.68.13-.67.2-2.06.2-4.23V27.76c0-2.17-.07-3.56-.2-4.23-.17-.78-.52-1.35-1.08-1.68a2.03 2.03 0 0 0-.26-.13h5.67l-.18.09c-.57.3-.95.85-1.13 1.6-.15.64-.22 2.08-.22 4.35v15.57c0 2.28.07 3.7.22 4.35.18.76.55 1.3 1.13 1.6l.18.09h-5.67Z" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="profile__text-container">
          <div className="profile__carousel--outer">
            <div className="profile__carousel">
              <h1 className="profile__inner">LOUIS O'HARA</h1>
              <h1 className="profile__inner">CODER</h1>
              <h1 className="profile__inner">CREATOR</h1>
              <h1 className="profile__inner">INNOVATOR</h1>
            </div>
          </div>

          <p className="profile__text">
            A{" "}
            <span className="profile__bold">full-stack Software Engineer </span>
            living in London, excited by challenge and driven by intrigue.
          </p>
        </div>

        <div className="profile__icons">
          <a href="https://linkedin.com/in/louis-ohara/" target="blank">
            <span title="LinkedIn" className="profile__icon-wrapper">
              <img
                className={
                  toggleDarkMode
                    ? "profile__icon profile__icon--alt"
                    : "profile__icon"
                }
                src={linkedinIcon}
                alt="linkedin logo"
              />
            </span>
          </a>
          <a href="https://github.com/louisohara" target="blank">
            <span title="GitHub" className="profile__icon-wrapper">
              <img
                className={
                  toggleDarkMode
                    ? "profile__icon profile__icon--alt"
                    : "profile__icon"
                }
                src={githubIcon}
                alt="github logo"
              />
            </span>
          </a>
          <a href={CV} target="blank">
            <span title="Resume" className="profile__icon-wrapper">
              <img
                className={
                  toggleDarkMode
                    ? "profile__icon profile__icon--user profile__icon--alt"
                    : "profile__icon profile__icon--user"
                }
                src={userIcon}
                alt="resume icon"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
