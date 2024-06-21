import React from 'react';
import CourseCard from './CourseCard';
import './Courses.css';

const Courses = () => (
  <div className="courses">
    <h2>Courses</h2>
    <div className="courses-grid">
      <CourseCard
        image="/images/course1.webp"
        title="Class 11 - Physics"
        description="Class-11 Physics till Gravitation. A total of 7 chapters covered. 100+ Questions in each chapter. 110+ hours of Live class + Doubt class and problem solving class."
        link="#"
      />
      <CourseCard
        image="/images/course2.webp"
        title="Class 11 - Chemistry"
        description="Class 11 Chemistry till Chemical Bonding and Molecular Structure. A total of 4  chapters covered. 100+ Questions in each chapter. 50+ hours of Live class + Doubt and problem solving classes."
        link="#"
      />
      <CourseCard
        image="/images/course3.webp"
        title="Class 12 - Chemistry"
        description="Solid States Covered in this course. 100+ Questions 10+ hours of live class + Doubt and problem solving classes."
        link="#"
      />
      <CourseCard
        image="/images/course1.webp"
        title="Class 12 - Physics"
        description="Solid States Covered in this course. 100+ Questions 10+ hours of live class + Doubt and problem solving classes."
        link="#"
      />
    </div>
    
  </div>
);

export default Courses;
