const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
        this.role = 'Manager'
    }
// write additonal method to return office number 
    getOfficeNumber () {
        return this.officeNumber
    }

}

module.exports = Manager; 
