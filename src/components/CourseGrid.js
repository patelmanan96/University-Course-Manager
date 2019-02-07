import React from 'react'
import CourseCard from './CourseCard'
import NewCourseCard from "./NewCourseCard";
import GridTableSwitch from "./GridTableSwitch";

const CourseGrid = ({courses, deleteCourse, addCourse}) =>
    <div className="container-fluid">
        <div className=" card-deck ">
            {
                courses.map(course =>
                    <CourseCard
                        deleteCourse={deleteCourse}
                        course={course}
                        key={course.id}/>
                )
            }
        </div>
    </div>

export default CourseGrid