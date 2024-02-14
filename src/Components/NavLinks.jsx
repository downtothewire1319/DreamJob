/* eslint-disable react/prop-types */
import classes from "../Styles/NavLinks.module.css";
import { NavLink } from "react-router-dom";

export default function NavLinks({ to, setOpenMenu, children }) {
  return (
    <NavLink
      onClick={() => setOpenMenu(false)}
      className={({ isActive }) =>
        isActive ? `${classes.active} ${classes.links}` : classes.links
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}
