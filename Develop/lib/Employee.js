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

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    const e = "Employee";
    return e;
  }
}

//const emp = new Employee("Steve Munoz", 3, "stevemunoz18@gmail.com");

module.exports = Employee;
