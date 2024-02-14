/* eslint-disable react/prop-types */
import Input from "./Input";
import classes from "../Styles/Form.module.css";

export default function Form({ handleSubmit, onSubmit, register }) {
  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.formDivider}>
        <Input register={register} type="text" name="title">
          Job Title
        </Input>

        <Input register={register} type="url" name="logo">
          Image URL
        </Input>

        <Input register={register} type="text" name="companyName">
          Company Name
        </Input>

        <Input register={register} type="url" name="website">
          Website
        </Input>

        <Input register={register} type="text" name="location">
          Location
        </Input>
      </div>

      <div className={classes.formDivider}>
        <Input register={register} type="text" name="position">
          Position
        </Input>
        <Input register={register} type="text" name="salary">
          Salary
        </Input>
        <Input
          register={register}
          type="date"
          name="deadLine"
          min={new Date().toISOString().split("T")[0]}
        >
          Dead Line
        </Input>
        <div className={classes.textArea}>
          <label htmlFor="description">Description:</label>
          <textarea
            placeholder="Description"
            id="description"
            {...register("description", { required: "This is required" })}
          />
        </div>
        <input type="submit" value={"Submit"} />
      </div>
    </form>
  );
}
