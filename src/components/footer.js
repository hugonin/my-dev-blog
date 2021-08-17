import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Router, Link } from "@reach/router";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

import {
  siteFooter,
  footerMain,
  footerLogo,
  footerFineprint,
  socialList,
  socialListItem,
  socialListLink,
} from "./layout.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={siteFooter}>
        <div className={footerMain}>
          <StaticImage
            src="../images/logo_transparent.png"
            alt="logo"
            className={footerLogo}
          />
          <p className={footerFineprint}>
            © {new Date().getFullYear()} Hugonin
            {` `}
            <a href="#">hugonin@dev.com</a>
          </p>
        </div>
        <ul className={socialList}>
          <li className={socialListItem}>
            <Link to="https://linkedin.com" className={socialListLink}>
              <FaLinkedin />
            </Link>
          </li>
          <li className={socialListItem}>
            <Link to="https://twitter.com" className={socialListLink}>
              <FaTwitter />
            </Link>
          </li>
          <li className={socialListItem}>
            <Link to="https://github.com" className={socialListLink}>
              <FaGithub />
            </Link>
          </li>
        </ul>

        <Router>
          <FaLinkedin path="https://linkedin.com" />
          <FaTwitter path="https://twitter.com" />
          <FaGithub path="https://github.com" />
        </Router>
      </footer>
    </div>
  );
};

export default Footer;
