import courses from "./courses";
import ModuleService from "./ModuleService";
import LessonService from "./LessonService";
import TopicService from "./TopicService";

class WidgetService {
    constructor() {
    }

    addHeadingWidget = (widToAdd, topicId, listOfWidgets) => {
        let t = this;
        widToAdd.id = null;
        fetch('https://jpa-server-mananpatel.herokuapp.com/api/topic/' + topicId + '/headingWidget', {
            method: 'post',
            body: JSON.stringify(widToAdd),
            headers: {
                'content-type': 'application/json'
            }
        }).then(
            function (voila) {
                let wid = listOfWidgets[0]
                if (wid !== undefined || null) {
                    t.recursionHandler(wid,topicId,listOfWidgets)
                }
            }
        )
    }

    recursionHandler = (wid, topicId, listOfWidgets) =>{
        if (wid.type === "HEADING") {
            listOfWidgets = listOfWidgets.filter(w => w.id !== wid.id)
            this.addHeadingWidget(wid, topicId, listOfWidgets);
        } else if (wid.type === "PARAGRAPH") {
            listOfWidgets = listOfWidgets.filter(w => w.id !== wid.id)
            this.addParagraphWidget(wid, topicId, listOfWidgets);
        } else if (wid.type === "LIST") {
            listOfWidgets = listOfWidgets.filter(w => w.id !== wid.id)
            this.addListWidget(wid, topicId, listOfWidgets);
        } else if (wid.type === "LINK") {
            listOfWidgets = listOfWidgets.filter(w => w.id !== wid.id)
            this.addLinkWidget(wid, topicId, listOfWidgets);
        } else if (wid.type === "IMAGE") {
            listOfWidgets = listOfWidgets.filter(w => w.id !== wid.id)
            this.addImageWidget(wid, topicId, listOfWidgets);
        }
    }

    addLinkWidget = (widToAdd, topicId, listOfWidgets) => {
        let t = this;
        widToAdd.id = null;
        fetch('https://jpa-server-mananpatel.herokuapp.com/api/topic/' + topicId + '/linkWidget', {
            method: 'post',
            body: JSON.stringify(widToAdd),
            headers: {
                'content-type': 'application/json'
            }
        }).then(
            function (voila) {
                let wid = listOfWidgets[0]
                if (wid !== undefined || null) {
                    t.recursionHandler(wid,topicId,listOfWidgets)
                }
            }
        )
    }

    addParagraphWidget = (widToAdd, topicId, listOfWidgets) => {
        let t = this;
        widToAdd.id = null;
        fetch('https://jpa-server-mananpatel.herokuapp.com/api/topic/' + topicId + '/paragraphWidget', {
            method: 'post',
            body: JSON.stringify(widToAdd),
            headers: {
                'content-type': 'application/json'
            }
        }).then(
            function (voila) {
                let wid = listOfWidgets[0]
                if (wid !== undefined || null) {
                    t.recursionHandler(wid,topicId,listOfWidgets)
                }
            }
        )
    }

    addImageWidget = (widToAdd, topicId, listOfWidgets) => {
        let t = this;
        widToAdd.id = null;
        fetch('https://jpa-server-mananpatel.herokuapp.com/api/topic/' + topicId + '/imageWidget', {
            method: 'post',
            body: JSON.stringify(widToAdd),
            headers: {
                'content-type': 'application/json'
            }

        }).then(
            function (voila) {
                let wid = listOfWidgets[0]
                if (wid !== undefined || null) {
                    t.recursionHandler(wid,topicId,listOfWidgets)
                }
            }
        )
    }

    addListWidget = (widToAdd, topicId, listOfWidgets) => {
        let t = this;
        widToAdd.id = null;
        fetch('https://jpa-server-mananpatel.herokuapp.com/api/topic/' + topicId + '/listWidget', {
            method: 'post',
            body: JSON.stringify(widToAdd),
            headers: {
                'content-type': 'application/json'
            }
        }).then(
            function (voila) {
                let wid = listOfWidgets[0]
                if (wid !== undefined || null) {
                    if (wid.type === "HEADING") {
                        t.recursionHandler(wid,topicId,listOfWidgets)
                    }
                }
            }
        )
    }

    saveWidgets = (topicId, listOfWidgets) => {
        let order = 1
        let t = this;
        return this.deleteWidgetsForTopic(topicId).then(
            function (voila) {
                let wid = listOfWidgets[0]
                if (wid !== undefined || null) {
                    t.recursionHandler(wid,topicId,listOfWidgets)
                }
                /*listOfWidgets.map(wid =>
                {
                    wid.order = order;
                    if(wid.type === "HEADING"){
                        t.addHeadingWidget(wid, topicId);
                    }
                    else if(wid.type === "PARAGRAPH"){
                        t.addParagraphWidget(wid, topicId);
                    }
                    else if(wid.type === "LIST"){
                        t.addListWidget(wid, topicId);
                    }
                    else if(wid.type === "LINK"){
                        t.addLinkWidget(wid, topicId);
                    }
                    else if(wid.type === "IMAGE"){
                        t.addImageWidget(wid, topicId);
                    }
                    order++;
                }*/
            }
            /*listOfWidgets.map(wid =>
                {
                    wid.order = order;
                    if(wid.type === "HEADING"){
                        this.addHeadingWidget(wid, topicId);
                    }
                    else if(wid.type === "PARAGRAPH"){
                        this.addParagraphWidget(wid, topicId);
                    }
                    else if(wid.type === "LIST"){
                        this.addListWidget(wid, topicId);
                    }
                    else if(wid.type === "LINK"){
                        this.addLinkWidget(wid, topicId);
                    }
                    else if(wid.type === "IMAGE"){
                        this.addImageWidget(wid, topicId);
                    }
                    order++;
                }
            )*/
        );
    }

    deleteWidgetsForTopic = (topicId) => {
        return fetch('https://jpa-server-mananpatel.herokuapp.com/api/topic/' + topicId + '/widget',
            {
                method: 'delete'
            });
    }

    loadWidgetsForTopic = (topicId) => {
        return fetch('https://jpa-server-mananpatel.herokuapp.com/api/topic/' + topicId + '/widget',
            {
                method: 'get'
            }).then(function (value) {
            return value.json();
        });
    }
}

export default WidgetService;
