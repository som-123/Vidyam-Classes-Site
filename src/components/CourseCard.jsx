import React from 'react';
import './CourseCard.css';

const CourseCard = ({ image, title, description, link }) => (
  <div className="course-card">
    <div className="course-image">
      <img src={image} alt={title} />
      <div className="course-title">{title}</div>
    </div>
    <div className="course-description">
      <p>{description}</p>
      <a href={link} className="course-button">Go to Course</a>
    </div>
  </div>
);

export default CourseCard;
