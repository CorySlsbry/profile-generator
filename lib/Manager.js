const Employee = require('./Employee');
//jest.mock('../lib/Manager.js');

class Manager extends Employee {
    constructor(name ='', officeNumber) {
        super(name);

        this.officeNumber = 1;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;