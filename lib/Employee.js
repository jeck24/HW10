// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id) {
      this.name = name;
      this.id = id;
    }
  
    printInfo() {
      for (const key in this) {
        console.log(`${key}: ${this[key]}`);
      }
    }
  }
  
  module.exports = Employee;