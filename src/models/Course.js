function Course(courseId, courseName, courseAuthor, modules) {
    this.courseId = courseId;
    this.courseName = courseName;
    this.courseAuthor = courseAuthor;
    this.modules = modules;

    this.setId = setId;
    this.getId = getId;
    this.setcourseName = setCourseName;
    this.getCourseName = getCourseName;
    this.setCourseAuthor= setCourseAuthor;
    this.getCourseAuthor = getCourseAuthor;
    this.setModules = setModules;
    this.getModules = getModules;

    function setId(courseId){
        this.courseId = courseId;
    }

    function getId(){
        return this.courseId;
    }

    function setCourseName(courseName){
        this.courseName = courseName;
    }

    function getCourseName(){
        return this.courseName;
    }

    function setCourseAuthor(courseAuthor) {
        this.courseAuthor = courseAuthor;
    }

    function getCourseAuthor() {
        return this.courseAuthor;
    }

    function setModules(modules) {
        return this.modules = modules;
    }

    function getModules() {
        return this.modules;
    }
}
export default Course;