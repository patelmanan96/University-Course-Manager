import React, {Component} from 'react';

class CourseTable extends Component{
    render() {
        return (
            <div className="container-fluid">
            <div className="table">
                <table className="table">
                    <thead>
                    <th className="d-none d-sm-table-cell">Title</th>
                    <th className="d-none d-sm-table-cell">Owned</th>
                    <th className="d-none d-sm-table-cell">Modified</th>
                    <th>&nbsp;</th>
                    </thead>
                    <tbody>
                    <tr className="thead-light">
                        <th>Today</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>

                    <tr>
                        <td><a href="../courseEditor/courseEditor.template.client.html">CS5500 Software Engineering</a>
                        </td>
                        <td className="d-none d-sm-table-cell">me</td>
                        <td className="d-none d-sm-table-cell">8:45</td>
                        <td><i className="fas fa-times"></i></td>
                    </tr>
                    <tr>
                        <td><a href="../courseEditor/courseEditor.template.client.html">CS5610 Web Development</a></td>
                            <td className="d-none d-sm-table-cell">me</td>
                            <td className="d-none d-sm-table-cell">8:45</td>
                            <td><i className="fas fa-times"></i></td>

                    </tr>

                    <tr className="thead-light">
                        <th className="col-md-12">Yesterday</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <td><a href="../courseEditor/courseEditor.template.client.html">CS5500 Software Engineering</a>
                        </td>
                            <td className="d-none d-sm-table-cell">me</td>
                            <td className="d-none d-sm-table-cell">8:45</td>
                            <td><i className="fas fa-times"></i></td>
                    </tr>
                    <tr>
                        <td><a href="../courseEditor/courseEditor.template.client.html">CS5610 Web Development</a>
                        </td>
                            <td className="d-none d-sm-table-cell">me</td>
                            <td className="d-none d-sm-table-cell">8:45</td>
                            <td><i className="fas fa-times"></i></td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}
export default CourseTable;