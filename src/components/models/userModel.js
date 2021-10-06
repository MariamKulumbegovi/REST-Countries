

export class User {
    constructor(fn, ln,b,a,h,w) {
      this.firstName = fn;
      this.lastName = ln;
      this.bio = "";
      this.age = 0;
      this.height=0;
      this.weight=0;
    }
  
    getName() {
      return this.firstName;
    }
  
    getLastName() {
      return this.lastName;
    }
  }