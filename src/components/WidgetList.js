import React from 'react'
import WidgetComponent from './WidgetComponent'

const WidgetList = ({widgets, addWidget, deleteWidget, updateWidget, moveUp, moveDown, save,previewOn, previewOff}) =>
<div>
        {
            widgets.length !== 0 && widgets[0].toggle === false &&
            <div className="row p-3">
                <div className="col-9"/>
                <div className="col-1">
                    <button onClick={() => {
                        save(widgets);
                        console.log(widgets)
                    }} className="btn btn-success btn-md">
                        Save
                    </button>
                </div>
                <div className="col-1 p-2">
                    <h6>&nbsp;Preview</h6>
                </div>
                <div className="col-1">
                    <a onClick={previewOn}>
                        <i className="fa fa-2x pd-1 fa-toggle-off text-dark" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        }
        {
            widgets.length !== 0 && widgets[0].toggle === true &&
            <div className="row p-3">
                <div className="col-9"/>
                <div className="col-1">
                    <button onClick={() => {
                        save(widgets);
                        console.log(widgets)
                    }} className="btn btn-success btn-md">
                        Save
                    </button>
                </div>
                <div className="col-1 p-2">
                    <h6>&nbsp;Preview</h6>
                </div>
                <div className="col-1">
                    <a onClick={previewOff}>
                        <i className="fa fa-2x pd-1 fa-toggle-on text-dark" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        }

        <div className="list-group">
            {
                widgets.map(widget =>
                    <WidgetComponent
                        index = {widgets.indexOf(widget)}
                        widgetsLength = {widgets.length}
                        key={widget.id}
                        moveUp={moveUp}
                        moveDown={moveDown}
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        widget={widget}/>
                )
            }
            <div className="row p-3">
                <div className="col-12">
                    <button onClick={() => addWidget(widgets)} className="btn btn-primary btn-block btn-md"><i
                        className="fa fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

export default WidgetList