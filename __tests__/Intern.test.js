const Intern = require('../content/Intern.js');

describe('Intern Class Test', ()=>{
    const Intern1test = [
        'Suzy', 4, 'email@hmail.com', 'UofU'
    ];
    const testIntern = new Intern(...Intern1test);
    test('Test get name method', ()=>{
        expect(testIntern.getName()).toBe('Suzy')
    });
    test('Test get id method', ()=>{
        expect(testIntern.getId()).toBe(4)
    });
    test('Test get email method', ()=>{
        expect(testIntern.getEmail()).toBe('email@hmail.com')
    });
    test('Test get school method', ()=>{
        expect(testIntern.getSchool()).toBe('UofU')
    });

});
