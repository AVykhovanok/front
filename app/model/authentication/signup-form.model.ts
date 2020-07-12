export class SignUpForm {
    login: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    about: string;

    constructor(login: string, firstName: string, lastName: string,
       password: string, email: string,  about: string ) {
        this.login = login;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.about = about;
      }
}