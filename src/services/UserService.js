class UserService {
    constructor() {
        this.loginLink = 'https://jpa-server-mananpatel.herokuapp.com/api/login';
        this.registerLink = 'https://jpa-server-mananpatel.herokuapp.com/api/register';
        this.currentUserLoggedIn = 'https://jpa-server-mananpatel.herokuapp.com/api/profile';
        this.logoutLink = 'https://jpa-server-mananpatel.herokuapp.com/api/logout';
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