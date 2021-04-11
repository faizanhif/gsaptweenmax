import React, { useEffect } from "react";
import "./LandingPage.css";

import { TweenMax } from "gsap";
const LandingPage = () => {
  useEffect(() => {
    TweenMax.from(".left-container", 2, {
      width: "0",
      //   {ease: easeInOut,}
    });

    TweenMax.from(".right-container", 2, {
      delay: 1.5,
      width: "0",
      opacity: "0",
      //   ease: Expo.easeInOut,
    });
    TweenMax.from(".center-container", 2, {
      delay: 3,
      width: "0",
      x: -20,
      //   ease: Expo.easeInOut,
    });
    TweenMax.from(".logo", 2, {
      delay: 1.5,
      y: 20,
      opacity: 0,
      //   ease: Expo.easeInOut,
    });
    TweenMax.from(".info", 2, {
      delay: 1.5,
      y: 50,
      opacity: 0,
      scale: 2.5,
      //   ease: Expo.easeInOut,
    });
    TweenMax.from(".story", 2, {
      delay: 2.5,
      y: 20,
      opacity: 0,
      //   ease: Expo.easeInOut,
    });
    TweenMax.from(".menu", 2, {
      delay: 3.5,
      y: 20,
      opacity: 0,
      rotation: 90,
      //   ease: Expo.easeInOut,
    });
    TweenMax.staggerFrom(
      ".social ul",
      2,
      {
        delay: 3.8,
        opacity: 0,
        y: 20,
        // ease: Expo.easeInOut,
      },
      0.1
    );
  }, []);

  return (
    <div>
      <div class="containers">
        <div class="left-container">
          <div class="logo">INFNT</div>
          <div class="info">
            <a href="#">FAQ</a>
            <a href="#">Help</a>
          </div>
        </div>

        <div class="right-container">
          <div class="first-block"></div>
          <div class="menu-container">
            <div class="menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div class="story">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
              tempore.ipsum dolor sit. tempore
            </p>
            <p>Read More</p>
          </div>
          <div class="social-container">
            <li class="social">
              <ul>Facebook</ul>
              <ul>Instagram</ul>
              <ul>Twitter</ul>
            </li>
          </div>
        </div>
        <div class="center-container"></div>
      </div>
    </div>
  );
};

export default LandingPage;
