function User(username, password, firstName, lastName, role,email,phone) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.email = email;
    this.phone = phone;

    this.setUsername = setUsername;
    this.getUsername = getUsername;
    this.setPassword = setPassword;
    this.getPassword = getPassword;
    this.setFirstName = setFirstName;
    this.getFirstName = getFirstName;
    this.setLastName = setLastName;
    this.getLastName = getLastName;
    this.setRole = setRole;
    this.getRole = getRole;
    this.setEmail = setEmail;
    this.getEmail = getEmail;
    this.setPhone = setPhone;
    this.getPhone = getPhone;

    function setPhone(phone){
        this.phone = phone;
    }

    function getPhone(){
        return this.phone;
    }

    function setEmail(email){
        this.email = email;
    }

    function getEmail(){
        return this.email;
    }

    function setUsername(username) {
        this.username = username;
    }

    function getUsername() {
        return this.username;
    }

    function setPassword(password) {
        return this.password = password;
    }

    function getPassword() {
        return this.password;
    }

    function setFirstName(firstName) {
        this.firstName = firstName;
    }

    function getFirstName() {
        return this.firstName;
    }

    function setLastName(lastName) {
        this.lastName = lastName;
    }

    function getLastName() {
        return this.lastName;
    }

    function setRole(role) {
        this.role = role;
    }

    function getRole() {
        return this.role;
    }
}
export default User;