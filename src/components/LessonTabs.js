import React from 'react'

class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lesson: {
                id: parseInt((new Date().getMilliseconds() % 1000) + 1),
                title: 'New Lesson',
                topics: [
                    {
                        id: parseInt((new Date().getMilliseconds() % 1000) + 2),
                        title: 'Topic 1',
                        widgets:[
                            {
                                id: parseInt((new Date().getMilliseconds() % 1000) + 3),
                                type: "HEADING",
                                size: 1,
                                headingText: "The Document Object Model",
                                toggle: false
                            }
                        ]
                    }
                ]
            },
        }
    }

    addLesson = () => {
        let inp = prompt("Enter The Topic Name : ");
        if (inp === "" || inp === null) {
            this.state =
                {
                    lesson: {
                        id: parseInt((new Date().getMilliseconds() % 1000) + 1),
                        title: 'New Lesson 1',
                        topics: [
                            {
                                id: parseInt((new Date().getMilliseconds() % 1000) + 2),
                                title: 'Topic 1',
                                widgets:[
                                    {
                                        id: parseInt((new Date().getMilliseconds() % 1000) + 3),
                                        type: "HEADING",
                                        size: 1,
                                        headingText: "The Document Object Model",
                                        toggle: false
                                    }
                                ]
                            }
                        ]
                    }
                }
        } else {
            this.state =
                {
                    lesson: {
                        id: parseInt((new Date().getMilliseconds() % 1000) + 1),
                        title: inp,
                        topics: [
                            {
                                id: parseInt((new Date().getMilliseconds() % 1000) + 2),
                                title: 'Topic 1',
                                widgets:[
                                    {
                                        id: parseInt((new Date().getMilliseconds() % 1000) + 3),
                                        type: "HEADING",
                                        size: 1,
                                        headingText: "The Document Object Model",
                                        toggle: false
                                    }
                                ]
                            }
                        ]
                    }
                }

        }
        this.props.addLesson(this.state.lesson);
    };

    render() {
        return (
            <div>
                <div className="row p-3">
                    <div className="col-12">
                        <ul className="breadcrumb">
                            {
                                this.props.lessons.map(lesson =>
                                    <li key={lesson.id} className="nav-item">
                                        <button onClick={() => this.props.selectLesson(lesson)}

                                                className={this.props.activateLessonTab(lesson) ?
                                                    "text-dark nav-link btn btn-outline-primary active" :
                                                    "text-dark nav-link btn btn-outline-primary"}>

                                            {lesson.title}&nbsp;&nbsp;&nbsp;
                                            <button type="button" onClick={() => this.props.deleteLessons(lesson)}
                                                    className="close text-white" aria-label="Close">
                                                <span aria-hidden="true"><i
                                                    className="fa fa-times text-black-50"/></span>
                                            </button>
                                            <button type="button" onClick={() => this.props.editLessons(lesson)}
                                                    className="close text-white" aria-label="Close">
                                                <span aria-hidden="true"><i
                                                    className="fa fa-pencil text-black-50"/></span>
                                            </button>
                                        </button>
                                    </li>
                                )
                            }
                            <li className="nav-item">
                                <a className="nav-link btn-outline-primary" onClick={this.addLesson}><i className="fa fa-plus"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default LessonTabs;