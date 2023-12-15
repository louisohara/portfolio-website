import CV from "../../assets/files/louis-ohara-resume.pdf";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import userIcon from "../../assets/icons/user.svg";
import "./Profile.scss";

function Profile({ toggleDarkMode }) {
  return (
    <section className="profile">
      <div className="profile__container">
        <div className="profile__flip-container">
          <div className="profile__card">
            <div className="profile__front"></div>
            <div className="profile__back">
              <h1 className="profile__logo">DEVELOPER. THINKER. MAKER.</h1>
            </div>
          </div>
        </div>
        <div className="profile__text-container">
          <h1 className="profile__title">Louis O'Hara</h1>
          <p className="profile__text">
            A{" "}
            <span className="profile__bold">full-stack Software Engineer </span>
            from London, excited by challenge and driven by intrigue.
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
                    ? "profile__icon profile__icon--alt"
                    : "profile__icon"
                }
                src={userIcon}
                alt="outline of person"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
