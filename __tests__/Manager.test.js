const Manager = require('../content/Manager.js');

describe('Manager Class Test', ()=>{
    const Manager1test = [
        'Joe', 5, 'email@gmail.com', '123456789'
    ];
    const testManager = new Manager(...Manager1test);
    test('Test get name method', ()=>{
        expect(testManager.getName()).toBe('Joe')
    });
    test('Test get id method', ()=>{
        expect(testManager.getId()).toBe(5)
    });
    test('Test get email method', ()=>{
        expect(testManager.getEmail()).toBe('email@gmail.com')
    });
    test('Test get office number method', ()=>{
        expect(testManager.getOfficeNumber()).toBe('123456789')
    });

});
