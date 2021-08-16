import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

import {
  container,
  sectionTitle,
  textCenter,
  imageFull

} from "../components/layout.module.css";



const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <section>
        <div className={container}>
        <StaticImage  src="../images/dev-jean-01.jpg" alt="my profile image" className={imageFull}/>
          <h2 className={sectionTitle}>About Me</h2>
          <p className={textCenter}>
            Hi there! This is my first dev blog built with Gatsby
          </p>
          <p>
            <strong>I used to be a pack rat</strong>. I had so many things that
            I thought that I loved, but the truth was I couldn't even appreciate
            any of it because there was too much.
          </p>
          <p>
            Things were terrible. I had a job that I hated, a home that I didn't
            want to live in, and I couldn't hold a relationship.
          </p>

          <h3 className={sectionTitle}>How I turned things around</h3>
          <p>
            <strong>
              I was on the verge of a breakdown when I got rid of everything
            </strong>
            . I literally put 90% of my possessions in the garbage, sold my
            place and moved into a smaller apartment, and I quit my job.
          </p>
          <p>
            It wasn't easy at all, but everything around me was in such a bad
            place, I didn't know what else to do. And it worked.
          </p>

          <h3 className={sectionTitle}>Now I live the simple life</h3>
          <p>
            Now that I'm living a simple life, things are so much better. I'm
            less stressed, enjoy life and work more, and I have more free time
            to enjoy.
          </p>
          <p>
            With how much it turned my life around,{" "}
            <strong>
              I felt like I had no choice but to start sharing how I did it
            </strong>
            , and how others can benefit from living a simple life as well,
            which is why I started this site!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
