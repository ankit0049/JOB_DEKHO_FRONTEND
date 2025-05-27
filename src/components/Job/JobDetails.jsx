import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../../main";
import "./JobDetails.css";
const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigate = useNavigate();
  
  const { isAuthorized, user } = useContext(Context);
  const url = import.meta.env.VITE_API_URL;
  console.log(url,"ye job details ka url hai");
  useEffect(() => {
    if (!isAuthorized) {
      navigate("/login");
      return;
    }

    axios
      .get(`${url}/api/v1/job/${id}`, { withCredentials: true })
      .then((res) => setJob(res.data.job))
      .catch(() => navigate("/notfound"));
  }, [id, isAuthorized, navigate]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="jobDetail page">
      <div className="overlay"></div>
      <div className="container">
        <button className="backBtn" onClick={handleBack}>
          ← Back
        </button>
        <h3>Job Details</h3>
        <div className="banner">
          <p>
            <strong>Title:</strong> <span>{job.title || "Loading..."}</span>
          </p>
          <p>
            <strong>Category:</strong> <span>{job.category}</span>
          </p>
          <p>
            <strong>Country:</strong> <span>{job.country}</span>
          </p>
          <p>
            <strong>City:</strong> <span>{job.city}</span>
          </p>
          <p>
            <strong>Location:</strong> <span>{job.location}</span>
          </p>
          <p>
            <strong>Description:</strong> <span>{job.description}</span>
          </p>
          <p>
            <strong>Job Posted On:</strong> <span>{job.jobPostedOn}</span>
          </p>
          <p>
            <strong>Salary:</strong>{" "}
            {job.fixedSalary ? (
              <span>{job.fixedSalary}</span>
            ) : (
              <span>
                {job.salaryFrom} - {job.salaryTo}
              </span>
            )}
          </p>
          {user?.role !== "Employer" && (
            <Link className="applyBtn" to={`/application/${job._id}`}>
              Apply Now
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
