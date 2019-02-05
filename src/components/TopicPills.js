import React from 'react'

const TopicPills = ({topics,deleteTopic,editTopic}) =>
    <div className="row p-3">
        <div className="col-12">
            <h1>{topics.title}</h1>

        </div>
    </div>
export default TopicPills;