import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Context } from "../../main.jsx";
import "./MyJobs.css";

const MyJobs = () => { 
  
  const navigateTo = useNavigate();
  const [myJobs, setMyJobs] = useState([]);
  const { isAuthorized, user } = useContext(Context);
      const url = import.meta.env.VITE_API_URL; 

  const getMyJobs = async () => {
    try {
      const { data } = await axios.get(`${url}/api/v1/job/getmyjobs`, {
        withCredentials: true,
      });
      setMyJobs(data.myJobs);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error fetching jobs");
    }
  };

  const handleDeleteJob = async (jobId) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;
    try {
      const { data } = await axios.delete(`${url}/api/v1/job/delete/${jobId}`, {
        withCredentials: true,
      });
      toast.success(data.message);
      getMyJobs();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error deleting job");
    }
  };

  const handleToggleExpired = async (jobId) => { 
   const url = import.meta.env.VITE_API_URL;
    try {
      const { data } = await axios.put(
        `${url}/api/v1/job/toggle-expired/${jobId}`,
        {},
        {
          withCredentials: true,
        }
      );
      toast.success(data.message);
      getMyJobs();
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Error updating job status"
      );
    }
  };

  const handleUpdateJob = (jobId) => {
    navigateTo(`/update/job/${jobId}`);
  };

  useEffect(() => {
    if (!isAuthorized || (user && user.role !== "Employer")) {
      navigateTo("/");
    } else {
      getMyJobs();
    }
  }, [isAuthorized, user]);

  return (
    <div className="myJobs-background">
      <div className="myJobs-container">
        <h2>Your Posted Jobs</h2>
        {myJobs.length === 0 ? (
          <p>You haven't posted any jobs yet.</p>
        ) : (
          <div className="myJobs-grid">
            {myJobs.map((job) => (
              <div key={job._id} className="myJob-card">
                <div>
                  <h3>{job.title}</h3>
                  <p>📍 {job.city}, {job.country}</p>
                  <p>🧩 {job.category}</p>
                  <p className={`status-label ${job.expired ? "expired" : "active"}`}>
                    {job.expired ? "Expired" : "Active"}
                  </p>
                </div>
                <div className="job-buttons">
                  <button onClick={() => handleDeleteJob(job._id)} className="delete-btn">
                    <MdDelete /> Delete
                  </button>
                  <button onClick={() => handleUpdateJob(job._id)} className="edit-btn">
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleToggleExpired(job._id)}
                    className={`expire-btn ${job.expired ? "reopen" : "expire"}`}
                  >
                    {job.expired ? "Reopen Job" : "Mark as Expired"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyJobs;
