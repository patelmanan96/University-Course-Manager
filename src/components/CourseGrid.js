import React from 'react'
import CourseCard from './CourseCard'
import NewCourseCard from "./NewCourseCard";
import GridTableSwitch from "./GridTableSwitch";

const CourseGrid = ({courses, deleteCourse, addCourse}) =>
    <div>
        <div className="table">
            <table>
                <tr>
                    <td className="d-sm-table-cell">&nbsp;</td>
                    <td className="d-sm-table-cell">&nbsp;</td>
                    <td className="d-sm-table-cell">&nbsp;</td>
                    <td className="d-sm-table-cell"><GridTableSwitch whatSwitch="/table"/></td>
                </tr>
            </table>
        </div>
        <div className="card-deck">
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