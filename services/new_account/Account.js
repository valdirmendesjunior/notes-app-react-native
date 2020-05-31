export default class Account {

    constructor(firstName, lastName, email, password) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._password = password;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }
}