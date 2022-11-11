// create two more of the same functions but with engineer and intern 

function generateManager (manager) {
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

function getTeam (teamArray) {
    const managerArray = teamArray.filter(employee => employee.getRole () == 'Manager');
    const engineerArray = teamArray.filter(employee => employee.getRole () == 'Engineer');
    const internArray = teamArray.filter(employee => employee.getRole () == 'Intern');
    console.log (managerArray);
    console.log (engineerArray);
    console.log (internArray);


};

module.exports = getTeam;

// send each element of each roles array through their appropriate generate HTML function after you make it.
// map method to create each card for each employee push to another array that's going into the html body