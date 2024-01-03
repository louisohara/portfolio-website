import "./About.scss";
import { stack } from "../../assets/data/data";

function About({ toggleDarkMode }) {
  const renderStack = () => {
    return (
      <>
        {stack.map((tech, index) => (
          <article key={index} className="about__skill">
            <div
              className={
                toggleDarkMode
                  ? `about__${tech.label} about__icon about__icon--alt`
                  : `about__icon about__${tech.label}`
              }
            ></div>
            <p className="about__label">{tech.name}</p>
          </article>
        ))}
      </>
    );
  };
  return (
    <section className={toggleDarkMode ? "about about--alt" : "about"}>
      <h3 className="about__title">About me</h3>
      <div className="about__marquee">
        <div className="about__marquee-inner">
          {renderStack()}
          {renderStack()}
        </div>
      </div>
      <div
        className={
          toggleDarkMode ? "about__info  about__info--alt" : "about__info "
        }
      >
        <h3 className="about__title about__title--alt">Hey, I'm Louis!</h3>
        <p className="about__bio">
          {/* <span className="about__span">Hey</span>, I'm{" "}
          <span className="about__span">Louis</span>, a full-stack engineer
          living in London. <br /> My coding journey began at BrainStation's{" "} */}
          My coding journey began at BrainStation's{" "}
          <a
            className="about__link"
            href="https://brainstation.io/online/software-engineering-bootcamp"
          >
            <span className="about__span about__span--alt">
              Software Engineering Bootcamp
            </span>
          </a>{" "}
          in September 2023, and I've been hooked ever since!
          <br />
          From sharpening my problem-solving skills on{" "}
          <a
            className="about__link"
            href="https://www.codewars.com/users/louisohara"
          >
            <span className="about__span about__span--alt">Codewars</span>
          </a>{" "}
          to crafting sleek and intuitive user interfaces, I'm always seeking
          the next exciting challenge. Outside of coding, you'll find me
          climbing, cooking or walking. <br />
          <a href="/#contact" className="about__link">
            <span className="about__span about__span--alt">Let's connect!</span>
          </a>
        </p>
      </div>
    </section>
  );
}
export default About;
