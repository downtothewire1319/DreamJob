/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import JobCard from "../../Components/JobCard";
import useFetch from "../../Hooks/useFetch";
import classes from "../../Styles/Jobs.module.css";
import Spinner from "../../Utls/Spinner";
import ErrorMessage from "../NothingFound/ErrorMessage";
import axios from "axios";
import { toast } from "react-toastify";
import Form from "../../Components/Form";
import { useForm } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import FavoriteManager from "../../Utls/FavoriteManager";
import ApplyNowManager from "../../Utls/ApplyNowManager";
import JobDetailsModal from "../../Components/jobDetailsModal";
import auth from "../../firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import JobApplicationForm from "../../Components/JobApplicationForm";

export default function Jobs() {
  const { register, handleSubmit, reset } = useForm();
  const [showDetails, setShowDetails] = useState(null);
  const [targetJob, setTargetJob] = useState(null);
  const { dataLoading, error, data } = useFetch(
    "https://rezauls-json-server.vercel.app/jobs"
  );
  const [jobs, setJobs] = useState(data);
  const [editingID, setEditingID] = useState(null);
  const [user, useLoading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    setJobs(data);
  }, [data]);

  const loading = dataLoading || useLoading;
  const location = useLocation();
  //Handling delete job
  const handleDelete = async (id, event) => {
    event.stopPropagation();
    if (!user) {
      navigate("/login", { state: { from: location } });
      toast.warn("Login first to continue!", {
        theme: "dark",
        autoClose: 1500,
      });
    } else {
      await axios.delete(`https://rezauls-json-server.vercel.app/jobs/${id}`);
      setJobs(jobs.filter((d) => d.id !== id));
      toast.error("The job has been deleted", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  //opening the form as a modal for editing the job. and showing the prev details.
  const handleEdit = (job, event) => {
    event.stopPropagation();
    if (!user) {
      navigate("/login", { state: { from: location } });
      toast.warn("Login first to continue!", {
        theme: "dark",
        autoClose: 1500,
      });
    } else {
      setEditingID(job.id);
      reset(job);
    }
  };

  // handle form submission
  const onSubmit = (data) => {
    axios
      .put(`https://rezauls-json-server.vercel.app/jobs/${editingID}`, data)
      .then((res) => {
        setJobs(
          jobs.map((job) => {
            if (job.id === editingID) {
              return { ...job, ...data };
            }
            return job;
          })
        );
        setEditingID(null);
        toast.success("Job updated successfully");
      })
      .catch((error) => {
        toast.error("Something Went Wrong");
      });
  };

  //Handle Favorite

  const handleFavorite = (job, event) => {
    event.stopPropagation();
    if (!user) {
      navigate("/login", { state: { from: location } });
      toast.warn("Login first to continue!", {
        theme: "dark",
        autoClose: 1500,
      });
    } else {
      FavoriteManager(jobs, job, setJobs, false, user.email);
      // FavoriteManager(jobs, job, setJobs);
    }
  };

  //Handle Apply now
  const handleApply = (job, event) => {
    event.stopPropagation();
    if (!user) {
      navigate("/login", { state: { from: location } });
      toast.warn("Login first to continue!", {
        theme: "dark",
        autoClose: 1500,
      });
    } else if (job.appliedBy?.includes(user.email)) {
      toast.warn("You already applied to this job!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      setTargetJob(job);
    }
  };

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.jobs}>
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              email={user?.email}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleFavorite={handleFavorite}
              handleApply={handleApply}
              setShowDetails={setShowDetails}
            />
          ))}
        </div>
        {/* Update form modal */}
        {editingID ? (
          <div className={classes.editForm}>
            <div>
              <button
                onClick={() => setEditingID(false)}
                className={classes.closeModalBtn}
              >
                <IoMdCloseCircle />
              </button>
              <Form
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
                register={register}
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {/* details modal */}
        {showDetails ? (
          <JobDetailsModal
            showDetails={showDetails}
            setShowDetails={setShowDetails}
          />
        ) : (
          ""
        )}
      </div>
      {targetJob && (
        <div className={classes.applicationModal}>
          <JobApplicationForm
            jobs={jobs}
            setJobs={setJobs}
            job={targetJob}
            setJob={setTargetJob}
          />
        </div>
      )}
    </div>
  );
}
