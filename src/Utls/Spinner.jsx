import classes from "../Styles/Spinner.module.css";

export default function Spinner() {
  return (
    <div className={classes.spinnerWrapper}>
      <span className={classes.loader}></span>
    </div>
  );
}
