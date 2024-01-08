import "./App.scss";
import { useState, useEffect } from "react";
import { useRef } from "react";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource-variable/inter";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import ReactFullpage from "@fullpage/react-fullpage";
import fullpage from "fullpage.js/dist/fullpage.extensions.min.js";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

export default function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  const [links, setLinks] = useState(null);

  const fullPageRef = useRef(null);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
    setActive(links);
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light",
    },
  });

  const setActive = async (array) => {
    if (window.fullpage_api) {
      const active = await window.fullpage_api.getActiveSection();
      if (active) {
        for (let i = 0; i < array.length; i++) {
          if (array[i].getAttribute("data-menuanchor") === active.anchor) {
            array[i].classList.add("active");
          } else {
            array[i].classList.remove("active");
          }
        }
      }
    }
  };

  const initialiseFullPage = () => {
    new fullpage("#fullpage", {
      scrollingSpeed: 1000,
      licenseKey: process.env.REACT_APP_LICENSE_KEY,
      credits: { enabled: false, label: "", position: "right" },
      dragAndMove: true,
      navigation: true,
      navigationPosition: "right",
      navigationColor: "#22223b",
      lazyLoading: false,
      slidesNavigation: true,
      menu: "#myMenu",
    });
  };
  const destroyFullPage = () => {
    if (fullPageRef) {
      window.fullpage_api.destroy("all");
    }
  };

  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
    destroyFullPage(); // Remove FullPage.js instance
    initialiseFullPage(); // Reinitialize FullPage.js after resizing
  };

  useEffect(() => {
    initialiseFullPage(); // Initial FullPage.js setup
    window.addEventListener("resize", handleResize);

    return () => {
      destroyFullPage();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // FOR MOBILE/TABLET REDIRECTION
  useEffect(() => {
    const active = window.fullpage_api.getActiveSection();
    if (dimensions.width > 768 && active.anchor === "profile") {
      window.fullpage_api.silentMoveTo("about");
    }

    if (dimensions.width < 768 && active.anchor === "about") {
      window.fullpage_api.silentMoveTo("profile");
    }
    const ulElement = document.querySelector("#myMenu"); // Assuming the UL has an ID of 'myMenu'
    if (ulElement) {
      setLinks(ulElement.children);
      setActive(ulElement.children);
    }
  }, [dimensions.width]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={toggleDarkMode ? "app" : "app app--alt"}>
        <Header
          toggleDarkTheme={toggleDarkTheme}
          toggleDarkMode={toggleDarkMode}
          dimensions={dimensions}
          handleClose={handleClose}
        />
        {dimensions.width > 768 && (
          <div
            className={
              toggleDarkMode
                ? "app__container"
                : "app__container app__container--alt"
            }
          >
            <Profile toggleDarkMode={toggleDarkMode} />
          </div>
        )}
        <div id="fullpage" className="app__page" ref={fullPageRef}>
          {dimensions.width <= 768 && (
            <div className="section app__section" data-anchor="profile">
              <div
                className={
                  toggleDarkMode
                    ? "app__container"
                    : "app__container app__container--alt"
                }
              >
                <Profile toggleDarkMode={toggleDarkMode} />
              </div>
            </div>
          )}
          <div className="section app__section" data-anchor="about">
            <About toggleDarkMode={toggleDarkMode} />
          </div>
          <div
            className={
              show
                ? "section app__section app__section--work app__section--alt"
                : "section app__section app__section--work app__section--alt"
            }
            data-anchor="work"
          >
            <Work
              toggleDarkMode={toggleDarkMode}
              show={show}
              handleShow={handleShow}
              handleClose={handleClose}
            />
          </div>
          <div className="section app__section" data-anchor="contact">
            <Contact toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
