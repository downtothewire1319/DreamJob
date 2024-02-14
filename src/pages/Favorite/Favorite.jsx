/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import classes from "../../Styles/Favorite.module.css";
import JobCard from "../../Components/JobCard";
import FavoriteManager from "../../Utls/FavoriteManager";
import Spinner from "../../Utls/Spinner";
import ErrorMessage from "../NothingFound/ErrorMessage";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";

export default function Favorite() {
  const { dataLoading, error, data } = useFetch(
    "https://rezauls-json-server.vercel.app/jobs"
  );
  const [favoriteJobs, setFavoriteJobs] = useState([]);
  const [user, userLoading] = useAuthState(auth);
  useEffect(() => {
    if (data && user) {
      setFavoriteJobs(
        data.filter(
          (d) =>
            typeof d.favoriteTo !== "undefined" &&
            d.favoriteTo.includes(user?.email)
        )
      );
    }
  }, [data, user]);

  const handleFavorite = (job, event) => {
    event.stopPropagation();
    FavoriteManager(favoriteJobs, job, setFavoriteJobs, true, user?.email);
  };

  if (dataLoading || userLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
  if (favoriteJobs.length === 0) {
    return (
      <h1 className={classes.emptyMessage}>
        You don't have any favorite job!!
      </h1>
    );
  }
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {favoriteJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            email={user.email}
            handleFavorite={handleFavorite}
            handleApply={"handleApply"}
            setShowDetails={"setShowDetails"}
            fromFavorite={true}
          />
        ))}
      </div>
    </div>
  );
}
