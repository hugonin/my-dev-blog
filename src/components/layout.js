import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  pageHeaderContent,
  logo,
  siteFooter,
} from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <div className={pageHeaderContent}>
        <div>
        <StaticImage src="../images/logo_transparent.png" alt="logo" className={logo}/>
        </div>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <main>
        {children}
      </main>
      <footer className={siteFooter}>
        <p>
          © {new Date().getFullYear()} Hugonin
          {` `}
          <a href="#">hugonin@dev.com</a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
