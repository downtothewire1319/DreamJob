/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import classes from "../Styles/Buttons.module.css";
import { FaArrowRight } from "react-icons/fa";

export default function Buttons({ to, handler, children }) {
  return (
    <>
      {to ? (
        <button style={{ backgroundColor: "transparent" }}>
          <Link to={to} className={classes.btnLink}>
            {children} <FaArrowRight />
          </Link>
        </button>
      ) : (
        <button onClick={handler} className={classes.btn}>
          {children}
        </button>
      )}
    </>
  );
}
