const Engineer = require('../content/Engineer.js');

describe('Engineer Class Test', ()=>{
    const engineer1test = [
        'Todd', 3, 'email@mail.com', 'todd3'
    ];
    const testEngineer = new Engineer(...engineer1test);
    test('Test get name method', ()=>{
        expect(testEngineer.getName()).toBe('Todd')
    });
    test('Test get id method', ()=>{
        expect(testEngineer.getId()).toBe(3)
    });
    test('Test get email method', ()=>{
        expect(testEngineer.getEmail()).toBe('email@mail.com')
    });
    test('Test get github method', ()=>{
        expect(testEngineer.getGithub()).toBe('todd3')
    });

});
