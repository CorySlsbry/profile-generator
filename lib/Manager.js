const Employee = require('./Employee');
jest.mock('../lib/Employee.js');

class Manager extends Employee {
    constructor(name ='Cory') {
        super(name);

        this.officeNumber = 1;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;