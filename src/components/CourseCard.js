import React from 'react'
import {Link} from 'react-router-dom';


const CourseCard = ({course, deleteCourse}) =>
    <div className="col-lg-2 col-md-4">
        <div className="card">
            <img className="card-img-top"
                 src="https://picsum.photos/300/200"/>
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Card text.</p>
                <Link to={"course/" + course.id} className="btn btn-primary">More...</Link>
                <button onClick={() => deleteCourse(course)} className="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>

export default CourseCard;