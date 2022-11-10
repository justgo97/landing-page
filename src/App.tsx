import React from "react";
import testimonialsData from "./data";

import * as EmailValidator from "email-validator";

import "./App.scss";
import Logo from "./component/Logo";
import {
  IconFacebook,
  IconInstagram,
  IconPinterest,
  IconTwitter,
  IconYoutube,
} from "./component/Icons";

function App() {
  const [menuActive, setMenuActive] = React.useState(false);
  const [slideIndex, setSlideIndex] = React.useState(1);
  const [userEmail, setUserEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);

  const modalRef = React.useRef<HTMLDivElement>(null);

  function onClickNav() {
    if (modalRef.current === null) return;

    if (modalRef.current.style.display !== "block") {
      modalRef.current.style.display = "block";
      setMenuActive(true);
    } else {
      modalRef.current.style.display = "none";
      setMenuActive(false);
    }
  }

  function onClickModal() {
    if (modalRef.current) {
      modalRef.current.style.display = "none";
      setMenuActive(false);
    }
  }

  function onClickBox(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
  }

  function onClickDot(slideNumber: number) {
    console.log(slideNumber);
    setSlideIndex(slideNumber);
  }

  function onSubmitEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (EmailValidator.validate(userEmail) !== true) {
      setEmailError(true);
    } else {
      setEmailError(false);
      alert("Email successfully subscribed to our newsletter!");
    }
  }

  function onChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setUserEmail(event.target.value);
  }

  return (
    <main>
      <nav>
        <img src="./images/logo.svg" alt="" />
        <div className="nav-items">
          <span className="nav-items-item">Pricing</span>
          <span className="nav-items-item">Product</span>
          <span className="nav-items-item">About Us</span>
          <span className="nav-items-item">Careers</span>
          <span className="nav-items-item">Community</span>
        </div>
        <button className="nav-getstarted">Get Started</button>
        <button onClick={onClickNav} className="nav-button">
          <img
            src={
              menuActive === true
                ? "./images/icon-close.svg"
                : "./images/icon-hamburger.svg"
            }
            alt=""
          />
        </button>
      </nav>
      <div onClick={onClickModal} className="page-modal" ref={modalRef}>
        <div onClick={onClickBox} className="mini-nav">
          <span className="nav-item">Pricing</span>
          <span className="nav-item">Product</span>
          <span className="nav-item">About Us</span>
          <span className="nav-item">Careers</span>
          <span className="nav-item">Community</span>
        </div>
      </div>
      <section>
        <div className="hero">
          <div className="hero-description">
            <h1>Bring everyone together to build better products.</h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button>Get Started</button>
          </div>
          <div className="hero-image">
            <img src="./images/illustration-intro.svg" alt="" />
          </div>
        </div>
        <div className="about">
          <div className="about-intro">
            <h2>What’s different about Manage?</h2>
            <p>
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          <div className="about-details">
            <div className="about-details-item">
              <div className="about-details-item-number">01</div>
              <div className="about-details-item-description">
                <h3 className="about-details-item-description-title">
                  Track company-wide progress
                </h3>
                <div className="about-details-item-description-text">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </div>
              </div>
            </div>
            <div className="about-details-item">
              <div className="about-details-item-number">02</div>
              <div className="about-details-item-description">
                <h3 className="about-details-item-description-title">
                  Advanced built-in reports
                </h3>
                <div className="about-details-item-description-text">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </div>
              </div>
            </div>
            <div className="about-details-item">
              <div className="about-details-item-number">03</div>
              <div className="about-details-item-description">
                <h3 className="about-details-item-description-title">
                  Everything you need in one place
                </h3>
                <div className="about-details-item-description-text">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials">
          <h2 className="testimonials-header">What they’ve said</h2>
          <div className="testimonials-body">
            {testimonialsData
              .filter((value, index) => index !== testimonialsData.length - 1)
              .map((item, index) => (
                <div key={index} className="testimonials-body-item">
                  <img
                    className="testimonials-body-item-avatar"
                    src={item.image}
                    alt=""
                  />
                  <h4>{item.name}</h4>
                  <span className="testimonials-body-item-text">
                    {item.text}
                  </span>
                </div>
              ))}
            <div className="testimonials-body-slideshow">
              {testimonialsData.map((item, index) => (
                <div
                  key={index}
                  className={`testimonials-body-slideshow-item ${
                    slideIndex === index ? "display" : "hide"
                  }`}
                >
                  <img
                    className="testimonials-body-slideshow-item-avatar"
                    src={item.image}
                    alt=""
                  />
                  <h4>{item.name}</h4>
                  <span className="testimonials-body-item-text">
                    {item.text}
                  </span>
                </div>
              ))}
              <div className="slide-dots">
                {testimonialsData.map((item, index) => (
                  <span
                    key={index}
                    onClick={(ev) => onClickDot(index)}
                    className={`dot ${slideIndex === index ? "active" : ""}`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
          <div className="testimonials-footer">
            <button>Get Started</button>
          </div>
        </div>
      </section>
      <footer>
        <div className="top">
          <div className="top-container">
            <h2>Simplify how your team works today.</h2>
            <button>Get Started</button>
          </div>
        </div>
        <div className="bot">
          <div className="bot-container">
            <div className="bot-start">
              <Logo />
              <div className="bot-start-social">
                <div className="bot-start-social-icon">
                  <IconFacebook />
                </div>
                <div className="bot-start-social-icon">
                  <IconYoutube />
                </div>
                <div className="bot-start-social-icon">
                  <IconTwitter />
                </div>
                <div className="bot-start-social-icon">
                  <IconPinterest />
                </div>
                <div className="bot-start-social-icon">
                  <IconInstagram />
                </div>
              </div>
            </div>
            <div className="bot-navs">
              <div className="bot-navs-row">
                <div className="bot-navs-item">Home</div>
                <div className="bot-navs-item">Pricing</div>
                <div className="bot-navs-item">Products</div>
                <div className="bot-navs-item">About Us</div>
              </div>
              <div className="bot-navs-row">
                <div className="bot-navs-item">Careers</div>
                <div className="bot-navs-item">Community</div>
                <div className="bot-navs-item">Privacy Policy</div>
              </div>
            </div>
            <div className="bot-end">
              <form onSubmit={onSubmitEmail}>
                <input
                  onChange={onChangeEmail}
                  value={userEmail}
                  type="text"
                  placeholder="Updates in your inbox…"
                  className={`${emailError && "error"}`}
                />
                <button>Go</button>
                {emailError && <p>Please insert a valid email</p>}
              </form>
              <p className="bot-end-cr">Copyright 2020. All Rights Reserved</p>
            </div>
          </div>
          <p className="mobile-cr">Copyright 2020. All Rights Reserved</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
