import React from 'react';

class CourseRowTitle extends React.Component {

    render() {
        return (
            <tr>
                <th className="d-none d-sm-table-cell">Title</th>
                <th className="d-none d-sm-table-cell">Owned</th>
                <th className="d-none d-sm-table-cell">Modified</th>
                <th>&nbsp;</th>
            </tr>

        )
    }
}
export default CourseRowTitle;