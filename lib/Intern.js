const Employee = require('../lib/Employee');
//jest.mock('../lib/Employee.js');

class Engineer extends Employee {
    constructor(name ='') {
        super(name);

        this.userName = userName;
        this.link = (`https://github.com/ ${userName}`);
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;