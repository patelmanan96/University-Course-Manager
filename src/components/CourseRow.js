import React from 'react';
import {Link} from 'react-router-dom';

const CourseRow = ({course,deleteCourse}) =>
    <tr>
        <td><Link to={"course/"+course.id}>{course.title}</Link>
        </td>
        <td className="d-none d-sm-table-cell">me</td>
        <td className="d-none d-sm-table-cell">8:45</td>
            <td><button onClick={()=>deleteCourse(course)} className="btn btn-sm btn-outline-dark"><i className="fa fa-times"/></button></td>
    </tr>;

export default CourseRow;