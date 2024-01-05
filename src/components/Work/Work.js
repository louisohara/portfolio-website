import "./Work.scss";
import {
  XCircleIcon,
  EyeIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";
import blink from "../../assets/icons/blink2.png";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import ImageCarousel from "../Carousel/Carousel";

function Work({ toggleDarkMode, show, handleShow, handleClose }) {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <section
      className={show ? "work work--alt" : "work"}
      onScroll={handleClose}
    >
      <article
        className={show ? "work__project work__project--alt" : "work__project"}
      >
        <div
          className={
            toggleDarkMode ? "work__cont work__cont--dark" : "work__cont"
          }
        >
          <ImageCarousel />

          <div className="work__overlay">
            <a
              href="https://github.com/louisohara/louis-ohara-blink"
              className="work__link"
            >
              <CodeBracketIcon
                className={
                  toggleDarkMode ? "work__icon work__icon--dark" : "work__icon"
                }
                title="View Code"
              />
            </a>
            {!show && (
              <div className="work__button" onClick={handleShow}>
                <EyeIcon
                  className={
                    toggleDarkMode
                      ? "work__icon work__icon--dark"
                      : "work__icon"
                  }
                  title="View Demo"
                />
              </div>
            )}
          </div>
        </div>
        {show && (
          <div className="work__modal-overlay">
            <div
              className="work__button work__button--alt"
              onClick={handleClose}
            >
              <XCircleIcon
                className={
                  toggleDarkMode
                    ? "work__icon work__icon--alt work__icon--dark"
                    : "work__icon work__icon--alt"
                }
              />
            </div>
            <span className="loader"></span>
            <iframe
              alt="demo video"
              title="Video of app demo"
              src="https://www.loom.com/embed/be035be7c50944c9ae500112055dee57?sid=cc5e05ba-70dc-4a94-ab32-cc7234a00aef?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&?hideFullScreenButton=true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen={true}
              className="work__modal"
              loading="lazy"
            ></iframe>
          </div>
        )}

        <div className="work__info">
          {!show && (
            <>
              <div className="work__div">
                <Particles
                  id="tsparticles"
                  className="work__particles"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={{
                    fullScreen: false,
                    background: {
                      color: {
                        value: "#1E2F23",
                      },
                    },
                    fpsLimit: 120,
                    interactivity: {
                      events: {
                        onClick: {
                          enable: false,
                          mode: "push",
                        },
                        onHover: {
                          enable: false,
                          mode: "repulse",
                        },
                        resize: true,
                      },
                      modes: {
                        push: {
                          quantity: 4,
                        },
                        repulse: {
                          distance: 50,
                          duration: 0.4,
                        },
                      },
                    },
                    particles: {
                      color: {
                        value: "#ffffff",
                      },
                      links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                      },
                      move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                          default: "bounce",
                        },
                        random: true,
                        speed: 2,
                        straight: false,
                      },
                      number: {
                        density: {
                          enable: true,
                          area: 800,
                        },
                        value: 80,
                      },
                      opacity: {
                        value: 0.5,
                      },
                      shape: {
                        type: "circle",
                      },
                      size: {
                        value: { min: 1, max: 3 },
                      },
                    },
                    detectRetina: true,
                  }}
                />
              </div>

              <img
                src={blink}
                alt="logo"
                className={
                  toggleDarkMode ? "work__logo work__logo--dark" : "work__logo "
                }
              />
              <ul className="work__list">
                <li className="work__list-item">JavaScript</li>
                <li className="work__list-item">React</li>
                <li className="work__list-item">MySql</li>
                <li className="work__list-item">Express</li>
                {/* <li className="work__list-item">Node.js</li> */}
                <li className="work__list-item">Firebase</li>
              </ul>
              <p className="work__bio">
                A full-stack web application designed to simplify organising
                last-minute plans with friends. Features include user
                authentication, user image upload and 'active now'
                functionality.
              </p>
            </>
          )}
        </div>
      </article>
    </section>
  );
}

export default Work;
