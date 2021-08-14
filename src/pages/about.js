import * as React from "react";
import { Link } from 'gatsby'
import Layout from "../components/layout";

import {
  container,
  sectionTitle,
  textCenter,
} from "../components/layout.module.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
     <div className={container}>
        <h2 className={sectionTitle}>About Me</h2>
        <p className={textCenter}>
        Hi there! This is my first dev blog built with Gatsby
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
 