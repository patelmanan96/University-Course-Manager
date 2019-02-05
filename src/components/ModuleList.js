import React from 'react'
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            module: {id: (new Date()).getTime() ,
                title: '',
                lessons:[
                    {
                        id:(new Date()).getTime(),
                        title:'',
                        topics:[]
                    }
                ]
            },
            modules: this.props.modules
        };

        // this.titleChanged = this.titleChanged.bind(this);
    }

    createModule = () => {
        this.setState(
            {
                modules: [
                    ...this.state.modules,
                    this.state.module
                ]
            }
        )
    }
    titleChanged = (event) => {
        this.setState(
            {
                module: {title: event.target.value}
            });
    }

    deleteModule = module => {
        this.state.modules = this.state.modules.filter(
            mod => mod.title !== module.title
        )
    }

    editModule = module => {
        let newName = prompt("ENTER NEW NAME FOR : " + module.title);
        if (newName !== "" && newName !== null) {
            let xx = this.state.modules.find(mod => mod.title === module.title);
            let index = this.state.modules.indexOf(xx);
            this.state.modules[index].title = newName;
            this.setState(
                {
                    modules: [
                        ...this.state.modules
                    ]
                }
            )
        }
    }


    render() {
        return (
            <div className="col-3 bg-dark">
                <ul className="nav flex-column nav-pills">

                    {
                        this.state.modules.map(
                            (module) => {
                                return (
                                    <ModuleListItem
                                        selectModule={this.props.selectModule}
                                        key={module.id}
                                        module={module}
                                        deleteModule={this.deleteModule}
                                        editModule={this.editModule}
                                    />
                                )
                            }
                        )
                    }
                    <div className="p-2"><input type="text" onChange={this.titleChanged}
                                                className="form-control" placeholder="Module Name"/></div>
                    <button className="btn btn-block btn-outline-primary" onClick={this.createModule}>
                        <i className="fa fa-plus"></i>
                    </button>

                </ul>
            </div>

        )
    }
}

export default ModuleList;