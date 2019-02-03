import React, {Component} from 'react';
import CourseRowTitle from "../components/CoureRowTitle";
import CourseRow from "../components/CourseRow";

const CourseTable = ({courses, deleteCourse, addCourse}) =>

    <div className="container-fluid">
        <div className="table">
            <table className="table">
                <CourseRowTitle/>

                {
                    courses.map(course =>
                        <CourseRow
                            deleteCourse={deleteCourse}
                            course={course}
                            key={course.id}/>
                    )
                }
            </table>
        </div>
    </div>;
export default CourseTable;