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
      <h3 className="about__title">Tech Stack:</h3>
      <div className="about__marquee">
        <div className="about__marquee-inner">
          {renderStack()}
          {renderStack()}
        </div>
      </div>
      <div className="about__info">
        <h3 className="about__title about__title--alt">Who am I?</h3>
        <p className="about__bio">
          For as long as I can remember, I've been interested in: lorem ipsum
        </p>
      </div>
    </section>
  );
}
export default About;
