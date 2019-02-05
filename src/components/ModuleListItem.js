import React from 'react'

const ModuleListItem = ({module, selectModule,deleteModule,editModule}) =>

    <a className="nav-link btn-outline-primary" onClick={() => selectModule(module)} href={() => selectModule(module)}>{module.title}
        <button type="button" onClick={()=>deleteModule(module)} className="close text-white" aria-label="Close">
            <span aria-hidden="true"><i className="fa fa-times"/></span>
        </button>
        <button type="button" className="close text-white" onClick={() => editModule(module)} aria-label="Close">
            <span aria-hidden="true"><i className="fa fa-pencil"/></span>
        </button>
    </a>;

export default ModuleListItem;