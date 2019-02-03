import React from 'react'

const ModuleListItem = ({module, selectModule}) =>

    <a className="nav-link btn-outline-primary" href={() => selectModule(module)}>{module.title}
        <button type="button" className="close text-white" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </a>;

export default ModuleListItem;