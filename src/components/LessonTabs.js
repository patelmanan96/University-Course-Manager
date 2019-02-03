import React from 'react'

const LessonTabs = ({lessons}) =>
    <div className="row p-3">
        <div className="col-12">
            <ul className="breadcrumb">
                {
                    lessons.map(lesson =>
                        <li key={lesson.id} className="nav-item">
                            <a className="nav-link btn-outline-primary"
                               href="#">{lesson.title}
                            </a>
                        </li>
                    )
                }
                <li className="nav-item">
                    <a className="nav-link btn-outline-primary" href="#"><i className="fa fa-plus"></i></a>
                </li>
            </ul>
        </div>
    </div>
export default LessonTabs