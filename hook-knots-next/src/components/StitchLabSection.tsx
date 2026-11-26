"use client";

import { useState, FormEvent } from "react";
import { courses } from "@/data/products";
import Footer from "./Footer";

export default function StitchLabSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [status, setStatus] = useState("");

  const openRegistration = (courseName: string) => {
    setSelectedCourse(courseName);
    setStatus("");
    setModalOpen(true);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("Thank you. Your place request has been received.");
  };

  return (
    <div className="stitchlab-section">
      {/* Hero */}
      <div className="stitchlab-hero-block">
        <div className="stitchlab-hero-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/culture4.png"
            alt="Hook & Knots creative workshop"
          />
        </div>
        <div className="stitchlab-hero-content">
          <p className="eyebrow">HOOK &amp; KNOTS PRESENTS</p>
          <h2>StitchLab</h2>
          <p>
            Learn the rhythm of making. Four practical courses for
            curious hands and a more considered wardrobe.
          </p>
          <span className="cta-button">Explore the courses</span>
        </div>
      </div>

      {/* Courses */}
      <div className="courses-block">
        <div>
          <p className="eyebrow">THE CURRICULUM / 04</p>
          <h2>
            Choose your
            <br />
            medium.
          </h2>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <article key={course.id} className="course-card">
              <div className="course-card-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={course.image}
                  alt={course.name}
                  loading="lazy"
                />
                <span>{course.num}</span>
              </div>
              <div className="course-card-body">
                <p className="course-type">{course.type}</p>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <div className="course-meta">
                  <span>
                    Duration <strong>{course.duration}</strong>
                  </span>
                  <span>
                    Level <strong>{course.level}</strong>
                  </span>
                </div>
                <button
                  className="course-register"
                  onClick={() => openRegistration(course.name)}
                >
                  Register for {course.name} →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />

      {/* Registration modal */}
      <div
        className={`registration-modal ${modalOpen ? "open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setModalOpen(false);
        }}
      >
        <div className="registration-dialog">
          <button
            className="registration-close"
            onClick={() => setModalOpen(false)}
          >
            Close
          </button>
          <p className="eyebrow">STITCHLAB REGISTRATION</p>
          <h2>Reserve your place.</h2>
          <p className="registration-selected">
            You are registering interest for {selectedCourse}.
          </p>
          <form className="registration-form" onSubmit={handleSubmit}>
            <label htmlFor="regName">Name</label>
            <input
              id="regName"
              type="text"
              placeholder="Your name"
              required
            />
            <label htmlFor="regEmail">Email address</label>
            <input
              id="regEmail"
              type="email"
              placeholder="you@example.com"
              required
            />
            <button className="cta-button cta-button-dark" type="submit">
              Submit registration
            </button>
            <p className="form-status">{status}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
