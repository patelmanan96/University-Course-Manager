import React from 'react'

const ImageWidget = ({widget,updateWidget}) =>

    <div className="col-12">
        <div className="container p-2">
            {
                widget.toggle === false && <div>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <input className="form-control" onChange={event => {
                                widget.text = event.target.value;
                                updateWidget(widget)
                            }} type="url" placeholder="Image link"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-12">
                            <input className="form-control"
                                   id="widgetI"
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
                    <img src={widget.text} height="420" width="600" placeholder="https://www.gstatic.com/webp/gallery/1.jpg"
                         alt="Failed to load image from the link"/>
                </div>
            </div>
        </div>
    </div>

export default ImageWidget