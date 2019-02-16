import React from "react";

const LinkWidget = ({widget, updateWidget}) =>
    <div className="col-12">
        <div className="container p-2">

            {
                widget.toggle === false && <div>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <input className="form-control" placeholder="www.google.com" value={widget.url}
                                   onChange={event => {
                                       widget.url = event.target.value;
                                       updateWidget(widget)
                                   }} type="url"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-12">
                            <input className="form-control" onChange={event => {
                                widget.linkText = event.target.value;
                                updateWidget(widget)
                            }
                            } type="text" placeholder="Link Text" value={widget.linkText}/>
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
                </div>
            }
            <div className="form-group row">
                <div className="col-sm-12">
                    <a target="_blank" href={"https://" + widget.url}>{widget.linkText}</a>
                </div>
            </div>
        </div>
    </div>
export default LinkWidget