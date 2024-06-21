import React from 'react';
import CourseCard from './CourseCard';
import './Programs.css';
import Quotes from './Quotes';

const Programs = () => (
    <div>
        <div className="programs">
            <h2>Programs</h2>
            <div className="class-courses">
                <h3>Class 11 Courses</h3>
                <div className="class-grid">
                    <CourseCard
                        image="/images/course1.webp"
                        title="Class 11 Course 1"
                        description="Description of Class 11 Course 1"
                        link="#"
                    />
                    <CourseCard
                        image="/images/course2.webp"
                        title="Class 11 Course 2"
                        description="Description of Class 11 Course 2"
                        link="#"
                    />
                </div>
            </div>
            <div className="class-courses">
                <h3>Class 12 Courses</h3>
                <div className="class-grid">
                    <CourseCard
                        image="/images/course1.webp"
                        title="Class 12 Course 1"
                        description="Description of Class 12 Course 1"
                        link="#"
                    />
                    <CourseCard
                        image="/images/course2.webp"
                        title="Class 12 Course 2"
                        description="Description of Class 12 Course 2"
                        link="#"
                    />
                </div>
            </div>
        </div>
        
    </div>

);

export default Programs;
