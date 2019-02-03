import React from 'react';

const CourseRow = ({course,deleteCourse}) =>
    <tr>
        <td><a href={"course/"+course.id}>{course.title}</a>
        </td>
        <td className="d-none d-sm-table-cell">me</td>
        <td className="d-none d-sm-table-cell">8:45</td>
            <td><button onClick={()=>deleteCourse(course)} className="btn btn-sm btn-outline-dark"><i className="fa fa-times"/></button></td>
    </tr>;

export default CourseRow;