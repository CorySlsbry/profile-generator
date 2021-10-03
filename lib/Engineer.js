const Employee = require('./Employee');

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