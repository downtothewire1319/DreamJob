/* eslint-disable react/prop-types */
import classes from "../Styles/JobCard.module.css";
import Buttons from "./Buttons";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function JobCard({
  job,
  email,
  featured,
  handleDelete,
  handleEdit,
  handleFavorite,
  handleApply,
  setShowDetails,
  fromApplied,
  fromFavorite,
}) {
  let {
    title,
    companyName,
    website,
    location,
    salary,
    position,
    deadLine,
    description,
    logo,
    id,
    favoriteTo,
    appliedBy,
  } = job;

  return (
    <div
      onClick={() => !fromApplied && !fromFavorite && setShowDetails(job)}
      className={classes.jobCard}
    >
      <div className={classes.cardTop}>
        <div className={classes.cardTopLeft}>
          <div className={classes.cardImg}>
            <img src={logo} alt="" />
          </div>
          <div className={classes.companyInfo}>
            <h2>{companyName}</h2>
            <h4>{website}</h4>
            <h4>{location}</h4>
          </div>
        </div>
        <div className={classes.cardTopRight}>
          <div className={classes.jobInfo}>
            <h4>Salary: {salary}</h4>
            <h4>Post: {position}</h4>
            <h4>Deadline: {deadLine}</h4>
          </div>
        </div>
      </div>

      <div className={classes.cardBody}>
        <h1>{title}</h1>
        <p>
          {description.length > 250
            ? `${description.slice(0, 200)}...`
            : description}
          {description.length > 250 ? (
            <span className={classes.seeMore}>See More</span>
          ) : (
            ""
          )}
        </p>
      </div>
      <div className={classes.cardFooter}>
        <div className={classes.cardBtns}>
          {!featured && !fromApplied && !fromFavorite ? (
            <>
              <div className={`${classes.btn} ${classes.deleteBtn}`}>
                <Buttons handler={(event) => handleDelete(id, event)}>
                  <MdDelete />
                </Buttons>
              </div>
              <div className={`${classes.btn} ${classes.editBtn}`}>
                <Buttons handler={(event) => handleEdit(job, event)}>
                  <FaEdit />
                </Buttons>
              </div>
            </>
          ) : (
            ""
          )}
          {!fromApplied && (
            <div className={`${classes.btn} ${classes.favoriteBtn} `}>
              <Buttons handler={(event) => handleFavorite(job, event)}>
                {favoriteTo?.includes(email) ? <FaHeart /> : <FaRegHeart />}
              </Buttons>
            </div>
          )}

          <div className={`${classes.btn} ${classes.applyBtn}`}>
            <Buttons
              handler={(event) =>
                !fromApplied && !fromFavorite && handleApply(job, event)
              }
            >
              {appliedBy?.includes(email) ? "Applied" : "Apply Now"}
            </Buttons>
          </div>
        </div>
      </div>
    </div>
  );
}
