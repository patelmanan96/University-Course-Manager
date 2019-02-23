import React from 'react'

class TopicPills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic:
                {
                    id: parseInt((new Date().getMilliseconds() % 1000) + 2),
                    title: 'New Topic',
                    widgets:[]
                }
        }
    }

    getAndPassTopic = () => {
        let tName = prompt("Enter Topic Name : ");
        if (tName !== undefined && tName !== "") {
            this.state = {
                topic: {
                    id: parseInt((new Date().getMilliseconds() % 1000) + 2),
                    title: tName,
                    widgets:[]
                }
            }
        }
        else {
                this.state = {
                    topic: {
                        id: parseInt((new Date().getMilliseconds() % 1000) + 2),
                        title: 'New Topic',
                        widgets:[]
                    }
                }
        }
        this.props.createTopic(this.state.topic)
    }

    render() {
        return (
            <div>
                <div className="row p-3">
                    <div className="col-12">
                        <ul className="breadcrumb">
                            {
                                this.props.topics.map(topic =>

                                    <li key={topic.id} className="nav-item">
                                        <button id={topic.id} onClick={() => this.props.selectTopic(topic)}
                                                className={this.props.activeTopic(topic) ? "text-dark nav-link btn btn-outline-primary active" :
                                                    "text-dark nav-link btn btn-outline-primary" }>{topic.title}&nbsp;&nbsp;&nbsp;
                                            <button type="button" onClick={() => {
                                                this.props.deleteTopic(topic)
                                            }} className="close text-white" aria-label="Close">
                                                <span aria-hidden="true"><i
                                                    className="fa fa-times text-black-50"/></span>
                                            </button>
                                            <button type="button" onClick={() => this.props.editTopics(topic)}
                                                    className="close text-white" aria-label="Close">
                                                <span aria-hidden="true"><i
                                                    className="fa fa-pencil text-black-50"/></span>
                                            </button>
                                        </button>
                                    </li>
                                )
                            }
                            <li className="nav-item">
                                <a className="nav-link btn-outline-primary" onClick={this.getAndPassTopic}><i className="fa fa-plus"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopicPills;