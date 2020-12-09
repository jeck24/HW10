// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      return this.name;
    }

    getId(){
      return this.id;
    }

    getEmail(){
      return this.email;
    }

    getRole(){
      this.role = "Employee";
      return this.role;
    }
    
    printInfo() {
      for (const key in this) {
        console.log(`${key}: ${this[key]}`);
      }
    }
  }
  
  module.exports = Employee;