class UserService {
    constructor() {
        this.loginLink = 'http://localhost:8080/api/login';
        this.registerLink = 'http://localhost:8080/api/register';
        this.currentUserLoggedIn = 'http://localhost:8080/api/profile';
        this.logoutLink = 'http://localhost:8080/api/logout';
    }

    loginUser = (user) => {
        return fetch(this.loginLink, {
            credentials:'include',
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (value) {
            return value.json();
        })
    }
    registerUser = (user) => {
        return fetch(this.registerLink, {
            credentials:'include',
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (value) {
            return value.json();
        })
    }

    currentUser = () => {
        return fetch(this.currentUserLoggedIn,
            {
                credentials:'include',
                method: 'get',
            }).then(function (value) {
            return value.json();
        });
    }

    logoutCurrentUser = () => {
        return fetch(this.logoutLink,
            {
                credentials:'include',
                method: 'get',
            });
    }
}

export default UserService;