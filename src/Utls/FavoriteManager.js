/* eslint-disable no-unused-vars */
import axios from "axios";
import { toast } from "react-toastify";

export default function FavoriteManager(
  jobs,
  job,
  setJobs,
  fromFavorite,
  email
) {
  const status = job.isFavorite === "undefined" ? true : !job.isFavorite;
  axios
    .put(`https://rezauls-json-server.vercel.app/jobs/${job.id}`, {
      ...job,
      favoriteTo:
        typeof job.favoriteTo === "undefined"
          ? [email]
          : !job.favoriteTo.includes(email)
          ? [...job.favoriteTo, email]
          : job.favoriteTo.filter((d) => d !== email),
    })
    .then((res) => {
      if (fromFavorite) {
        setJobs(jobs.filter((j) => j.id !== job.id));
      } else {
        setJobs(() => {
          return jobs.map((j) => {
            if (j.id === job.id) {
              return {
                ...j,
                favoriteTo:
                  typeof job.favoriteTo === "undefined"
                    ? [email]
                    : !job.favoriteTo.includes(email)
                    ? [...job.favoriteTo, email]
                    : job.favoriteTo.filter((d) => d !== email),
              };
            }
            return j;
          });
        });
      }
    })
    .then(() => {
      job?.favoriteTo?.includes(email)
        ? toast.warn("Job has been removed from favorite", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
        : toast.success("Job has been added to favorite", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
    });
}
