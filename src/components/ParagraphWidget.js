import React from 'react'

const ParagraphWidget = ({widget,updateWidget}) =>

    <div className="col-12">
        <div className="container p-2">
            <div className="form-group row">
                <div className="col-sm-12">
                    <textarea onChange={event => {
                        widget.paraText = event.target.value;
                        updateWidget(widget)
                    }}
                              className="form-control">Type Paragraph Here...</textarea>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-12">
                    <input className="form-control"
                           id="widgetNP"
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
                    <p>{widget.paraText}</p>
                </div>
            </div>
        </div>
    </div>

export default ParagraphWidget;