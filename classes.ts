class User {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}
const user = new User("karthik", "B");
console.log(user);
