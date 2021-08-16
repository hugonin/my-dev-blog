import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  siteFooter,
  footerMain,
  logo,
  footerFineprint,
  socialList,
} from "./layout.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={siteFooter}>
        <div className={footerMain}>
          <StaticImage
            src="../images/logo_transparent.png"
            alt="logo"
            className={logo}
          />
          <p className={footerFineprint}>
            © {new Date().getFullYear()} Hugonin
            {` `}
            <a href="#">hugonin@dev.com</a>
          </p>
        </div>
        <ul className={socialList}>
       
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
