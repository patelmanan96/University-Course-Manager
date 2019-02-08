import React from 'react';

const SavePreviewPanel = () =>
    <div className="row p-3">
        <div className="col-9"></div>
        <div className="col-1">
            <button className="btn btn-success btn-md">
                Save
            </button>
        </div>
        <div className="col-1 p-2">
            <h6>&nbsp;Preview</h6>
        </div>
        <div className="col-1">
            <i className="fa fa-2x pd-1 fa-toggle-off" aria-hidden="true"></i>
        </div>
    </div>
export default SavePreviewPanel;