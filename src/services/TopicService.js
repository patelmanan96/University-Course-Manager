class TopicService {
    constructor() {}

    addTopicREST = (lid,topic) => {
        return fetch('http://localhost:8080/api/lesson/' + lid + '/topic', {
            method: 'post',
            body: JSON.stringify(topic),
            headers: {
                'content-type': 'application/json'
            }
        })
    }
    updateTopic = (topic) => {
        return fetch('http://localhost:8080/api/topic/' + topic.id, {
            method: 'put',
            body: JSON.stringify(topic),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    deleteTopicREST = (topic) => {
        return fetch('http://localhost:8080/api/topic/' + topic.id, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        })
    }
}
export default TopicService;