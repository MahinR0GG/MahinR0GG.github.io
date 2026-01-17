import React, { useState, useEffect } from "react";
import "./style.css";
import { logotext, socialprofils } from "../content_option";

const Headermain = () => {
  const [isActive, setActive] = useState("false");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const toggleTheme = (e) => {
    e.preventDefault();
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    handleToggle();
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <a
            className="navbar-brand nav_ac logo-theme-toggle"
            href="#home"
            onClick={toggleTheme}
            title="Click to toggle dark/light mode"
          >
            {logotext}
          </a>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <a onClick={() => scrollToSection('home')} href="#home" className="my-3">Home</a>
                  </li>
                  <li className="menu_item">
                    <a onClick={() => scrollToSection('about')} href="#about" className="my-3">About</a>
                  </li>
                  <li className="menu_item">
                    <a onClick={() => scrollToSection('portfolio')} href="#portfolio" className="my-3">Portfolio</a>
                  </li>
                  <li className="menu_item">
                    <a onClick={() => scrollToSection('contact')} href="#contact" className="my-3">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a href={socialprofils.facebook}>Facebook</a>
              <a href={socialprofils.github}>Github</a>
              <a href={socialprofils.twitter}>Twitter</a>
            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>

    </>
  );
};

export default Headermain;
