import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'
import CourseService from "../services/CourseService";

const courseService = new CourseService();

const stateToPropertyMapper = state => ({
    widgets: state.widgets
})

const dispatchToPropertyMapper = (dispatch, props) => ({

    deleteWidget: widget =>
        dispatch({
            type: 'DELETE_WIDGET',
            widget: widget
        }),
    addWidget: (widgets) =>
        dispatch({
            type: 'ADD_WIDGET',
            widgets: widgets
        }),
    updateWidget: widget =>
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget
        }),
    moveUp: (widget,widgets) => {
        /*console.log("BEFORE : ")
        console.log(courseService.findWidgets(props.topicId))
        courseService.moveUp(props.topicId,widget)
        console.log("AFTER : ")
        console.log(courseService.findWidgets(props.topicId))*/

        dispatch({
            type: 'MOVE_UP',
            currentWidget : widget
        })
    },
    moveDown: widget =>{
        console.log("WIDGET TO MOVE DOWN")
        console.log(widget);
        dispatch({
            type: 'MOVE_DOWN',
            widget: widget
        })
    },
    save: widgets => {
        console.log("T ID : "+props.topicId)
        courseService.createWidget(props.topicId,widgets);
    },

})


const WidgetListContainer =
    connect(
        stateToPropertyMapper,
        dispatchToPropertyMapper
    )(WidgetList)

export default WidgetListContainer;