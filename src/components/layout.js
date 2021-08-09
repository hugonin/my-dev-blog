import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
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

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql
    `
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
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
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Blog
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
