import React from 'react'
import ModuleListItem from "./ModuleListItem";
import ModuleService from "../services/ModuleService";

class ModuleList extends React.Component {
    constructor(props) {
        super(props)
        this.moduleService = new ModuleService();

        this.state = {
            module: {
                title: 'New Module',
                lessons:[
                    {
                        title:'Lesson 1',
                        topics:[{
                            title:'Topic 1'
                        }]
                    }
                ]
            },
        };

        // this.titleChanged = this.titleChanged.bind(this);
    }

    createModule = () => {
        this.moduleService.createModule(this.props.courseId,this.state.module)
        let t = this;
        this.moduleService.loadModulesRest(this.props.courseId).then(
            function (val) {
                console.log("MOD REFRESH : ");
                console.log(val)
                t.setState(
                    {
                        modules:val
                    }
                )
                t.props.refreshContent();
            }
        )
        /*this.setState(
            {
                modules: [
                    ...this.state.modules,
                    this.state.module
                ]
            }
        )*/
    }
    titleChanged = (event) => {
        this.setState(
            {
                module: {
                    title: event.target.value,
                    lessons: [
                        {
                            title: 'Lesson 1',
                            topics:[{
                                title:'Topic 1',
                                widgets:[]
                            }]
                        }
                    ]
                }
            });
    }

    deleteModule = module => {
        let t = this;
        this.moduleService.deleteModuleRest(module).then(
            function (cal) {
                t.props.refreshContent();
            }
        )


        /*this.state.modules = this.state.modules.filter(
            mod => mod.title !== module.title
        )
        console.log(this.state.modules)
*/    }

    editModule = module => {
        let newName = prompt("ENTER NEW NAME FOR : " + module.title);
        if (newName !== "" && newName !== null) {
            module.title = newName;
            let t = this;
            this.moduleService.updateModuleRest(module).then(
                function () {
                    t.props.refreshContent();
                }
            );
        }
    }


    render() {
        return (
            <div className="col-3 bg-dark">
                <ul className="nav flex-column nav-pills">

                    {
                        this.props.modules.map(
                            (module) => {
                                return (
                                    <ModuleListItem
                                        activeModule = {this.props.activeModule}
                                        moduleClass={this.props.moduleClass}
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