/* import { useState, useEffect, useContext } from "react";
 */
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
import styles from "../styles/modules/Navbar.module.css";
import hand from "../assets/hand.png";
import hand1 from "../assets/hand1.png";
/* import { SessionContext } from "../contexts/SessionContext";
 */
function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.navLink}>
        <img
          src={hand}
          alt="Home"
          className={styles.navImage}
          onMouseEnter={(e) => (e.currentTarget.src = hand1)}
          onMouseLeave={(e) => (e.currentTarget.src = hand)}
        />
      </Link>
      <div className={styles.leftSideLinks}>
        <Link to="/about" className={styles.aboutLink}>
          ABOUT
        </Link>
        <Link to="/projects" className={styles.borrowLink}>
          PROJECTS
        </Link>
        {/* {isAuthenticated && (
          <>
            <Link to="/favorites" className={styles.favoritesLink}>
              FAVORITES
            </Link>
            <Link to="/newitem" className={styles.shareLink}>
              SHARE
            </Link>
          </>
        )} */}
      </div>

      <div className={styles.buttonContainer}>
        {/*  {!isAuthenticated ? (
          <>
            <Button
              component={Link}
              to="/login"
              variant="outline"
              color="#224eff"
              className={styles.button}
            >
              Log In
            </Button>
            <Button
              component={Link}
              to="/signup"
              variant="filled"
              color="#224eff"
              className={styles.button}
            >
              Sign Up
            </Button>
          </>
        ) : (
          <>
            <Button
              component={Link}
              to="/userdash"
              variant="outline"
              color="#224eff"
              className={styles.button}
            >
              <div className={styles.userInfo}>
                {user ? `${user.username}` : "Dashboard"}
              </div>
            </Button>
            <Button
              onClick={handleLogout}
              variant="filled"
              color="#224eff"
              className={styles.button}
            >
              Log Out
            </Button>
          </>
        )} */}
      </div>
    </div>
  );
}

export default Navbar;
