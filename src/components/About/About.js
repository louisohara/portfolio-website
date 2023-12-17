import "./About.scss";
import { stack } from "../../assets/data/data";

// FOR TECH STACK
function About() {
  const renderStack = () => {
    return (
      <>
        {stack.map((tech, index) => (
          <article key={index} className="about__skill">
            <div className={`about__icon about__${tech.label}`}></div>
            <p className="about__label">{tech.name}</p>
          </article>
        ))}
      </>
    );
  };
  return (
    <section className="about">
      <h3 className="about__title">About me</h3>
      <div className="about__marquee">
        <div className="about__marquee-inner">
          {renderStack()}
          {renderStack()}
        </div>
      </div>
      <div className="about__info">
        <h3 className="about__title about__title--alt">Who am I?</h3>
        <p className="about__bio">
          I'm <span className="about__span">Louis</span>, a full-stack engineer
          from London. I learnt how to code during BrainStation's{" "}
          <a
            className="about__link"
            href="https://brainstation.io/online/software-engineering-bootcamp"
          >
            <span className="about__span about__span--alt">
              Software Engineering Bootcamp
            </span>
          </a>{" "}
          in September 2023, and ever since I started on this learning journey,
          I've found it hard to stop!
          <br />
          <a href="/#contact" className="about__link">
            <span className="about__span about__span--alt">
              Hit me up if you want to climb, cook or code together.
            </span>
          </a>
        </p>
      </div>
    </section>
  );
}
export default About;
