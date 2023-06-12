import { A } from "@solidjs/router";
import { createEffect, onCleanup } from "solid-js";
import "../../css/main.css";
import base from "../../configs";

function Homepage() {
  const linkStyles = `
    .linkStyles {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      border-radius: 0.3000000rem;
      margin-right: 1rem;
    }

    .installButton {
      background-color: green;
    }
  `;

  function slideshow() {
    var imageUrls = ["1.png", "3.png", "4.png", "5.png"];
    var img = document.getElementById("slideshow");
    let current = 1;
    for (let i = 1; i < imageUrls.length; i++) {
      const tempImg = new Image();
      tempImg.src = imageUrls[i];
    }

    setInterval(() => {
      img.src = "/slideshow/" + imageUrls[current];
      current = (current + 1) % imageUrls.length;
      console.log(current);
    }, 4000);
  }

  createEffect(slideshow);

  const currentYear = new Date().getFullYear();

  return (
    <div id="homepage">
      <div id="wrapper">
        <header id="header" class="alt">
          <span class="logo">
            <img height="170" src={"/logo.gif"} alt="" />
          </span>
          <h1>METIS Linux</h1>
          <p> Sleek. Potent and beautiful Runit-driven Linux distribution </p>
        </header>

        <div id="main">
          <section id="intro" class="main">
            <div class="spotlight">
              <div class="content">
                <header class="major">
                  <h2>What is METIS Linux?</h2>
                </header>
                <p>
                  MetisLinux is an Artix-based (runit-driven) distro for exceptional speed and performance. Pre-configured for a seamless window manager experience.
                </p>
                <ul class="actions">
                  <li>
                    <A classList={{ linkStyles: true, installButton: true }} href="/docs/install/welcome">
                      <span>Install&nbsp; </span>
                      <span class="icon solid fa-download"></span>
                    </A>
                  </li>
                </ul>
              </div>
              <span class="image">
                <img height="100%" id="slideshow" src={base + "/slideshow/1.png"} alt="" />
              </span>
            </div>
          </section>

          <section id="first" class="main special">
            <header class="major">
              <h2>Features</h2>
            </header>
            <ul class="features">
              <li>
                <span class="icon solid major style1 fa-clone"></span>
                <h3>Tiling Windows</h3>
                <p>
                  Minimal, lightweight distro with window managers & lightweight apps. Runs efficiently, uses as low as 500MB RAM.
                </p>
              </li>
              <li>
                <span class="icon solid major style3 fa-bolt"></span>
                <h3>Stunning Visuals</h3>
                <p>
                  Clean, minimal aesthetic with flat, pastel colors. Consistent UI design, diverse themes for stunning visuals.
                </p>
              </li>
              <li>
                <span class="icon solid major style5 fa-cog"></span>
                <h3>Powerful Performance</h3>
                <p>
                  Latest software, AUR support. Empowers tasks on Linux PC. Lightweight for optimal performance.
                </p>
              </li>
            </ul>
          </section>
        </div>

        <h6 align="center">
          Copyright (c) {currentYear} <A href="https://metislinux.org">METIS Linux</A> // <A href="https://github.com/pwnwriter">PwnWriter</A>
        </h6>

      </div>
    </div>
  );
}

export default Homepage;
export { base };

