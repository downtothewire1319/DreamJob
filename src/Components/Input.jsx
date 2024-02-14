/* eslint-disable react/prop-types */
import classes from "../Styles/Input.module.css";
export default function Input({ register, type, name, children, min }) {
  console.log(min);
  return (
    <div className={classes.inputWrapper}>
      <label htmlFor={name}>{children}:</label>
      <input
        type={type}
        id={name}
        min={type === "date" ? min : ""}
        placeholder={`Enter ${children}`}
        {...register(name, { required: "This is required" })}
      />
    </div>
  );
}
