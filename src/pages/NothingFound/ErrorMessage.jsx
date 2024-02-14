/* eslint-disable react/prop-types */
import classes from "../../Styles/ErrorMessage.module.css";

export default function ErrorMessage({ children }) {
  return (
    <div className={classes.errorMsgWrapper}>
      <div>
        <img
          src="https://img.freepik.com/free-photo/yellow-triangle-warning-sign-symbol-danger-caution-risk-traffic-icon-background-3d-rendering_56104-1156.jpg"
          alt=""
        />
      </div>
      <p className={classes.errorMsg}>{children}</p>
      <button className={classes.refreshBtn} onClick={() => location.reload()}>
        Refresh
      </button>
    </div>
  );
}
