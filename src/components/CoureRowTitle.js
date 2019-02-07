import React from 'react';
import GridTableSwitch from "./GridTableSwitch";

const CourseRowTitle = () =>
    <tr>
        <th className="d-none d-sm-table-cell">Title</th>
        <th className="d-none d-sm-table-cell">Owned</th>
        <th className="d-none d-sm-table-cell">Modified</th>
        <th>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3"><GridTableSwitch whatSwitch="/"/></div>
                    <div className="col-9"></div>
                </div>
            </div>
        </th>
    </tr>;

export default CourseRowTitle;