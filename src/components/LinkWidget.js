import React from "react";

const LinkWidget = ({widget,updateWidget}) =>
    <div className="col-12">
        <div className="container p-2">

            <div className="form-group row">
                <div className="col-sm-12">
                    <input className="form-control" placeholder="www.google.com"
                           onChange={event => {
                               widget.url = event.target.value;
                               updateWidget(widget)
                           }} type="url"/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-12">
                    <input className="form-control" onChange={event => {
                        widget.text = event.target.value;
                        updateWidget(widget)
                    }
                    } type="text" placeholder="Link Text"/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-12">
                    <input className="form-control"
                           id="widgetLK"
                           placeholder="Widget Name"/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-12">
                    <h4>Preview</h4>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-12">
                    <a target="_blank" href={"https://"+widget.url}>{widget.text}</a>
                </div>
            </div>
        </div>
    </div>
export default LinkWidget