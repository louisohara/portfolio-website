import "./App.scss";
import { useState, useEffect } from "react";
import { useRef } from "react";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource-variable/inter";
import ThemeButton from "./components/ThemeButton/ThemeButton";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import ReactFullpage from "@fullpage/react-fullpage";
import fullpage from "fullpage.js";
import Header from "./components/Header/Header";

export default function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  const fullPageRef = useRef(null);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });

  const initialiseFullPage = () => {
    const anchors =
      dimensions.width <= 768
        ? ["profile", "about", "work", "contact"]
        : ["about", "work", "contact"]; // Anchors for tablet and above sizes

    if (dimensions.width <= 768) {
      anchors.unshift("profile"); // Add 'profile' anchor for mobile size
    }

    new fullpage("#fullpage", {
      scrollingSpeed: 1000,
      licenseKey: "49LBJ-QFTRJ-2K68I-J3RQ6-JLXMN",
      credits: { enabled: false, label: "", position: "right" },
      dragAndMove: true,
      navigation: true,
      navigationPosition: "right",
      navigationColor: "pink",
      lazyLoading: false,
      anchors: anchors,
      menu: "#myMenu",
    });
  };
  const destroyFullPage = () => {
    if (fullPageRef) {
      fullPageRef.innerHTML = ""; // Remove content inside the FullPage.js container
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

    // return () => {
    //   destroyFullPage();
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  // FOR MOBILE TO TABLET REDIRECTION
  useEffect(() => {
    const active = window.fullpage_api.getActiveSection();
    if (dimensions.width > 768 && active.anchor === "profile") {
      window.fullpage_api.silentMoveTo("about");
    }
  }, [dimensions.width]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="app">
        <Header
          toggleDarkTheme={toggleDarkTheme}
          toggleDarkMode={toggleDarkMode}
        />
        {dimensions.width > 768 && (
          <div className="app__container">Welcome to my portfolio website</div>
        )}
        <div id="fullpage" ref={fullPageRef}>
          {dimensions.width <= 768 && (
            <div className="section" data-anchor="profile">
              <div className="app__container">
                Welcome to my portfolio website
              </div>
            </div>
          )}

          <div className="section" data-anchor="about">
            <About />
          </div>
          <div className="section" data-anchor="work">
            <Work />
          </div>
          <div className="section" data-anchor="contact">
            <Contact />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
