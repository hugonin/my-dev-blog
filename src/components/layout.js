import * as React from "react";
import { Link } from "gatsby";
import { container, navLinks, navLinkItem, navLinkText, heading, siteFooter } from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
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
