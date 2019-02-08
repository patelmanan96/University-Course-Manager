import React from 'react'

const HeadingWidget = ({widget, updateWidget}) =>


    <div className="col-12">
        <div className="container p-2">
            <div className="form-group row">
                <div className="col-sm-12">
                    <input className="form-control" value={widget.text}
                           onChange={event => {
                               widget.text = event.target.value;
                               updateWidget(widget)
                           }}
                           id="headingT"
                           placeholder="Heading Text"/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-12">
                    <select className="form-control"
                            onChange={
                                event => {
                                    widget.size = parseInt(event.target.value);
                                    updateWidget(widget);
                                }
                            }>
                        <option value="1">
                            Heading1
                        </option>
                        <option value="2">
                            Heading2
                        </option>
                        <option value="3">
                            Heading3
                        </option>
                        <option value="4">
                            Heading4
                        </option>
                        <option value="5">
                            Heading5
                        </option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-12">
                    <input className="form-control"
                           id="widgetN"
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
                    {
                        widget.size === 1 && <h1>{widget.text}</h1> ||
                        widget.size === 2 && <h2>{widget.text}</h2> ||
                        widget.size === 3 && <h3>{widget.text}</h3> ||
                        widget.size === 4 && <h4>{widget.text}</h4> ||
                        widget.size === 5 && <h5>{widget.text}</h5>
                    }
                </div>
            </div>
        </div>
    </div>


export default HeadingWidget