import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = state => ({
    widgets: state.widgets
})

const dispatchToPropertyMapper = (dispatch, widgets) => ({

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
    moveUp: widget =>
        dispatch({
            type:'MOVE_UP',
            widget:widget
        }),
    moveDown: widget =>
        dispatch({
            type: 'MOVE_DOWN',
            widget:widget
        }),
    loadWidgets: widgets =>
        dispatch({
            type: 'LOAD',
            widget:widgets
        }),

})



const WidgetListContainer  =
    connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetList)

export default WidgetListContainer;