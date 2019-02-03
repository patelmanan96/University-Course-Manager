import React from 'react'


const CourseCard = ({course,deleteCourse}) =>
    <div className="card" styles={{width: '18rem'}}>
        <img className="card-img-top"
             src="https://picsum.photos/300/200"/>
        <div className="card-body">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text">Card text.</p>
            <a href={"course/"+course.id} className="btn btn-primary">More...</a>
            <button onClick={() => deleteCourse(course)} className="btn btn-danger">Delete</button>
        </div>
    </div>

export default CourseCard;