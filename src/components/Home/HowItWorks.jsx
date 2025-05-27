import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import "./HowItWorks.css";
const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works__container">
        <h2 className="how-it-works__heading">How JobSeeker Works</h2>
        <div className="how-it-works__steps">
          <div className="how-it-works__card">
            <FaUserPlus className="how-it-works__icon" />
            <h3>Create Your Account</h3>
            <p>
              Sign up in just a few steps and set up your professional profile to stand out to recruiters.
            </p>
          </div>
          <div className="how-it-works__card">
            <MdFindInPage className="how-it-works__icon" />
            <h3>Explore Jobs or Post Roles</h3>
            <p>
              Browse thousands of verified job listings or post vacancies as a recruiter with ease.
            </p>
          </div>
          <div className="how-it-works__card">
            <IoMdSend className="how-it-works__icon" />
            <h3>Apply or Hire</h3>
            <p>
              Apply with one click or shortlist qualified candidates to accelerate your hiring process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
