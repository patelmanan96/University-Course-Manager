function Course(courseId, title, author, modules) {
    this.courseId = courseId;
    this.title = title;
    this.author = author;
    this.modules = modules;

    this.setId = setId;
    this.getId = getId;
    this.setTitle = setTitle;
    this.getTitle = getTitle;
    this.setAuthor= setAuthor;
    this.getAuthor = getAuthor;
    this.setModules = setModules;
    this.getModules = getModules;

    function setId(courseId){
        this.courseId = courseId;
    }

    function getId(){
        return this.courseId;
    }

    function setTitle(title){
        this.title = title;
    }

    function getTitle(){
        return this.title;
    }

    function setAuthor(author) {
        this.author = author;
    }

    function getAuthor() {
        return this.author;
    }

    function setModules(modules) {
        return this.modules = modules;
    }

    function getModules() {
        return this.modules;
    }
}
export default Course;