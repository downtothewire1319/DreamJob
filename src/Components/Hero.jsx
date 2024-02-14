import classes from "../Styles/Hero.module.css";
import Buttons from "./Buttons";

export default function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes.heroLeft}>
        <h1>
          Grab Your{" "}
          <span>
            Dream<span>!</span>{" "}
          </span>
        </h1>
        <p>
          Empower Your Career Journey: <br /> Find Your Next Opportunity with
          <span> Halal Jibika</span>. <br />
          Your Dream Job Awaits – Discover, Connect, Succeed!
        </p>
        <div className={classes.heroBtn}>
          <div>
            <Buttons to={"/jobs"}>Explorer More</Buttons>
          </div>
        </div>
      </div>
      <div className={classes.heroRight}>
        <img
          src="https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg"
          alt="A person searching jobs online."
        />
      </div>
    </div>
  );
}
