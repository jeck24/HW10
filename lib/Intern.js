// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(school) {
    this.school=school;

    super(name, id, email);
  }

  getSchool(){
    return this.school;
  }

  getRole(){
    this.role = "Intern";
    return this.role;
  }
}