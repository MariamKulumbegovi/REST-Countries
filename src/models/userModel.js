export class UserModel {
  constructor(fn, ln, age) {
    this.firstName -= fn;
    this.lastName = ln;
    this.age = age;
  }
  getName() {
    return this.firstName;
  }
  getlastName() {
    return this.lastName;
  }
}
