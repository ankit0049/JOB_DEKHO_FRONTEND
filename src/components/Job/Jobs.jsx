import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import { GiSpade } from "react-icons/gi";
import "./Jobs.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate(); 
  const url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${url}/api/v1/job/getall`, { withCredentials: true })
      .then((res) => setJobs(res.data.jobs || []))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!isAuthorized) navigateTo("/");
  }, [isAuthorized, navigateTo]);

  return (
    <section className="jobs page">
      <div className="container">
        <h1>All Available Jobs</h1>
        <div className="banner">
          {jobs.map((job) => (
            <div className="card" key={job._id}>
              <div className="icon-title">
                <GiSpade size={26} className="spade-icon" />
                <p className="title">{job.title}</p>
              </div>
              <p className="category">{job.category}</p>
              <p className="country">{job.country}</p>
              <Link to={`/job/${job._id}`} className="details-link">
                View Job Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
