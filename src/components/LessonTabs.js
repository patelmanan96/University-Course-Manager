import React from 'react'

class LessonTabs extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row p-3">
                    <div className="col-12">
                        <ul className="breadcrumb">
                            {
                                this.props.lessons.map(lesson =>
                                    <li key={lesson.id} className="nav-item">
                                        <button onClick={() => this.props.selectLesson(lesson)} className="text-dark nav-link btn btn-outline-primary">{lesson.title}&nbsp;&nbsp;&nbsp;
                                            <button type="button" onClick={() => this.props.deleteLessons(lesson)} className="close text-white" aria-label="Close">
                                                <span aria-hidden="true"><i className="fa fa-times text-black-50"/></span>
                                            </button>
                                            <button type="button" onClick={() => this.props.editLessons(lesson)} className="close text-white" aria-label="Close">
                                                <span aria-hidden="true"><i className="fa fa-pencil text-black-50"/></span>
                                            </button>
                                        </button>
                                    </li>
                                )
                            }
                            <li className="nav-item">
                                <a className="nav-link btn-outline-primary" href="#"><i className="fa fa-plus"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default LessonTabs;