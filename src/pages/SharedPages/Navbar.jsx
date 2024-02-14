import { Link } from "react-router-dom";
import classes from "../../Styles/Navbar.module.css";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import NavLinks from "../../Components/NavLinks";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import Spinner from "../../Utls/Spinner";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleSignOut = () => {
    signOut();
    setOpenMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className={`${classes.container} ${scrolled && classes.scrolled}`}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <Link>Halal Jibika</Link>
        </div>
        <div className={classes.burgerMenu}>
          <div
            className={classes.burgerMenuBtn}
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? (
              <span>
                <IoCloseSharp />
              </span>
            ) : (
              <span>
                <IoMenu />
              </span>
            )}
          </div>
        </div>
        <nav
          className={`${classes.navLinks} ${
            openMenu ? classes.openMobileNavLinks : ""
          }`}
        >
          <ul>
            <li>
              <NavLinks to={"/"} setOpenMenu={setOpenMenu}>
                Home
              </NavLinks>
            </li>
            <li>
              <NavLinks to={"/jobs"} setOpenMenu={setOpenMenu}>
                Jobs
              </NavLinks>
            </li>
            {user && (
              <>
                <li>
                  <NavLinks to={"/favorite"} setOpenMenu={setOpenMenu}>
                    Favorite
                  </NavLinks>
                </li>
                <li>
                  <NavLinks to={"/applied"} setOpenMenu={setOpenMenu}>
                    Applied
                  </NavLinks>
                </li>
                <li>
                  <NavLinks to={"/addjob"} setOpenMenu={setOpenMenu}>
                    Add Job
                  </NavLinks>
                </li>
              </>
            )}
            <li>
              <NavLinks to={"/about"} setOpenMenu={setOpenMenu}>
                About
              </NavLinks>
            </li>
            <li>
              <NavLinks to={"/contact"} setOpenMenu={setOpenMenu}>
                Contact
              </NavLinks>
            </li>
            {user ? (
              <>
                <li>
                  <Link className={classes.links} onClick={handleSignOut}>
                    Sign out
                  </Link>
                </li>
                <li className={classes.userImg}>
                  <img
                    width={"36px"}
                    height={"36px"}
                    style={{
                      border: "1px solid white",
                      borderRadius: "50%",
                      padding: "2px",
                    }}
                    src={
                      user.photoURL ??
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png"
                    }
                    alt={user.displayName}
                  />
                </li>
              </>
            ) : (
              <li>
                <NavLinks to={"/login"} setOpenMenu={setOpenMenu}>
                  Login
                </NavLinks>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
