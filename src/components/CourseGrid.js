import React from 'react'
import CourseCard from './CourseCard'
import GridTableSwitch from "./GridTableSwitch";

const CourseGrid = ({courses, deleteCourse, addCourse}) =>
    <div className="container-fluid p-4">
        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4"></div>
            <div className="col-sm-4"><GridTableSwitch whatSwitch="/table"/></div>
        </div>
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
        </div>;

export default CourseGrid;