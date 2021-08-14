import React from "react";


import {
  featuredArticles,
  container,
  sectionTitle,
  textCenter,
} from "./layout.module.css";

const FeaturedArticles = ({ children }) => {
  return (
    <section className={featuredArticles}>
      <div className={container}>
        <h2 className={sectionTitle}>Featured Articles</h2>
        <p className={textCenter}>
          Here is a sample of articles which I feel give you a good idea of what
          this site is all about.
        </p>
        {children}
      </div>
    </section>
  );
};

export default FeaturedArticles;
