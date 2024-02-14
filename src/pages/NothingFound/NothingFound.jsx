import { Link } from "react-router-dom";
import classes from "../../Styles/NothingFound.module.css";
import { FaHome } from "react-icons/fa";

export default function NothingFound() {
  return (
    <div className={classes.container}>
      <h1>404 Page not Found</h1>
      <div className={classes.homeBtn}>
        <FaHome />
        <Link to={"/"}>Way to Home</Link>
      </div>
    </div>
  );
}
