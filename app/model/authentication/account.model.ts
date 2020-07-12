export class AccountDTO {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  about: string;
 
  constructor(id: number, firstName: string, lastName: string, 
    email: string, role: string, about: string,) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.role = role;
    this.about = about;
  }
}
