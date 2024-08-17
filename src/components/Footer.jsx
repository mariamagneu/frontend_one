import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/modules/Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div>
        <a
          href="https://github.com/mariamagneu/frontend_one"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Repository
        </a>
        |
        <a
          href="https://github.com/mariamagneu/backend_one"
          target="_blank"
          rel="noopener noreferrer"
        >
          Backend Repository
        </a>
      </div>
      <div>&copy; {currentYear} One. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
