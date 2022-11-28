const Employee = require('../content/Employee.js');

describe('Employee Class Test', ()=>{
    const employee1test = [
        'Emilee', 2, 'email@email.com'
    ];
    const testEmployee = new Employee(...employee1test);
    test('Test get name method', ()=>{
        expect(testEmployee.getName()).toBe('Emilee')
    });
    test('Test get id method', ()=>{
        expect(testEmployee.getId()).toBe(2)
    });
    test('Test get email method', ()=>{
        expect(testEmployee.getEmail()).toBe('email@email.com')
    });
    test('Test get role method', ()=>{
        expect(testEmployee.getRole()).toBe('Employee')
    });

});
