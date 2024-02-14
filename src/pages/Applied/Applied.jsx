/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import classes from "../../Styles/Applied.module.css";
import JobCard from "../../Components/JobCard";
import Spinner from "../../Utls/Spinner";
import ErrorMessage from "../NothingFound/ErrorMessage";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";

export default function Applied() {
  const { dataLoading, error, data } = useFetch(
    "https://rezauls-json-server.vercel.app/jobs"
  );
  const [appliedJobs, setAppliedJobs] = useState(data);
  const [user, userLoading] = useAuthState(auth);
  useEffect(() => {
    if (data && user) {
      setAppliedJobs(
        data.filter(
          (d) =>
            typeof d.appliedBy !== "undefined" &&
            d.appliedBy.includes(user?.email)
        )
      );
    }
  }, [data, user]);

  if (dataLoading || userLoading) {
    return <Spinner />;
  }
  if (error) {
    <ErrorMessage>{error}</ErrorMessage>;
  }
  if (appliedJobs.length === 0) {
    return (
      <h1 className={classes.emptyMessage}>
        You didn't apply for any job yet!!
      </h1>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {appliedJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            email={user.email}
            handleFavorite={"handleFavorite"}
            handleApply={"handleApply"}
            setShowDetails={"setShowDetails"}
            fromApplied={true}
          />
        ))}
      </div>
    </div>
  );
}
