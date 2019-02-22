class ModuleService{
    constructor(){
    }

    loadModulesRest = (mid) => {
        console.log("MODULE ID TO SERVE : " + mid);
        return fetch('http://localhost:8080/api/courses/' + mid + '/modules',{
            method: 'get'
        }).then(function (value) {
            return value.json();
        })
    }

    createModule = (cid,module) =>{
        return fetch('http://localhost:8080/api/courses/'+cid+'/modules', {
            method: 'post',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    updateModuleRest = (module) => {
        return fetch('http://localhost:8080/api/modules/'+module.id, {
            method: 'put',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    deleteModuleRest = (module) => {
        return fetch('http://localhost:8080/api/modules/'+module.id, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        })
    }

}
export default ModuleService;