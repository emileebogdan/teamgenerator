// create two more of the same functions but with engineer and intern 
// manager card
function generateManager(manager) {
  return `<div class="card" style="width: 18rem;">
    <div class = "card-header">
        <h1>${manager.getName()}</h1>
        <h2>${manager.getRole()}</h2>
    </div>
    <div class="card-body">
      <h5 class="card-title">${manager.getID()}</h5>
      <h5 class="card-title">${manager.getEmail()}</h5>
      <h5 class="card-title">${manager.officeNumber()}</h5>
    </div>
  </div>
`
};
// engineer card
function generateEmgineer(Engineer) {
  return `<div class="card" style="width: 18rem;">
  <div class = "card-header">
      <h1>${Engineer.getName()}</h1>
      <h2>${Engineer.getRole()}</h2>
  </div>
  <div class="card-body">
    <h5 class="card-title">${Engineer.getID()}</h5>
    <h5 class="card-title">${Engineer.getEmail()}</h5>
    <h5 class="card-title">${Engineer.github()}</h5>
  </div>
</div>
`
};

// intern card 
function generateIntern(Intern) {
  return `<div class="card" style="width: 18rem;">
  <div class = "card-header">
      <h1>${Intern.getName()}</h1>
      <h2>${Intern.getRole()}</h2>
  </div>
  <div class="card-body">
    <h5 class="card-title">${Intern.getID()}</h5>
    <h5 class="card-title">${Intern.getEmail()}</h5>
    <h5 class="card-title">${Intern.school()}</h5>
  </div>
</div>
`
};
function getTeam(teamArray) {
  const managerArray = teamArray.filter(employee => employee.getRole() === 'Manager')
    .map(manager => generateManager(manager));
  const engineerArray = teamArray.filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => generateEngineer(engineer)
      .join(""));
  const internArray = teamArray.filter(employee => employee.getRole() === 'Intern').map(intern => generateIntern(intern)
    .join(""));
  console.log(managerArray);
  console.log(engineerArray);
  console.log(internArray);


};

module.exports = getTeam;



// send each element of each roles array through their appropriate generate HTML function after you make it.
// map method to create each card for each employee push to another array that's going into the html body