class ModuleService{
    constructor(){
    }

    loadModulesRest = (mid) => {
        console.log("MODULE ID TO SERVE : " + mid);
        return fetch('https://server-java-mananpatel.herokuapp.com/api/courses/' + mid + '/modules',{
            method: 'get'
        }).then(function (value) {
            return value.json();
        })
    }

    createModule = (cid,module) =>{
        return fetch('https://server-java-mananpatel.herokuapp.com/api/courses/'+cid+'/modules', {
            method: 'post',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    updateModuleRest = (module) => {
        return fetch('https://server-java-mananpatel.herokuapp.com/api/modules/'+module.id, {
            method: 'put',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    deleteModuleRest = (module) => {
        return fetch('https://server-java-mananpatel.herokuapp.com/api/modules/'+module.id, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        })
    }

}
export default ModuleService;