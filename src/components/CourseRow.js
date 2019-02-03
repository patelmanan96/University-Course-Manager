import React from 'react';

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td><a href="#">{this.props.course.title}</a>
                </td>
                <td className="d-none d-sm-table-cell">me</td>
                <td className="d-none d-sm-table-cell">8:45</td>
                <td><i className="fa fa-times"></i></td>
            </tr>

        )
    }
}
export default CourseRow;