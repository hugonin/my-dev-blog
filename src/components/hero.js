import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import {
  container,
  heroContent,
  sectionTitle,
  flexGroup,
  heroImage,
  btnPrimary,
  btnNeutral,
  hero,
} from "./layout.module.css";

const Hero = () => {
  return (
    <section className={hero}>
      <div className={container}>
        <div className={heroContent}>
          <h1 className={sectionTitle}>Welcome to my blog!</h1>
          <p>
            I use this space to document my adventures in front-end development,
            sharing how I’ve overcome issues I’ve run into, useful resources,
            and more.
          </p>
          <p>
            Below are some of my favourite articles, or you can go to the blog
            page to see my most recent posts.
          </p>
          <div className={flexGroup}>
            <Link to="/" className={btnPrimary}>
              Featured articles
            </Link>

            <Link to="/blog" className={btnNeutral}>
              Most recent articles
            </Link>
          </div>
        </div>
        <div>
          <StaticImage
            src="https://unsplash.it/510"
            alt="random images"
            className={heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
