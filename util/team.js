// create two more of the same functions but with engineer and intern 
// manager card
function generateManager(Manager) {
  return `<div class="card" style="width: 18rem;">
    <div class = "card-header">
        <h1>${Manager.getName()}</h1>
        <h2>${Manager.getRole()}</h2>
    </div>
    <div class="card-body">
      <h5 class="card-title">${Manager.getId()}</h5>
      <h5 class="card-title">${Manager.getEmail()}</h5>
      <h5 class="card-title">${Manager.getOfficeNumber()}</h5>
    </div>
  </div>
`
};
// engineer card
function generateEngineer(Engineer) {
  return `<div class="card" style="width: 18rem;">
  <div class = "card-header">
      <h1>${Engineer.getName()}</h1>
      <h2>${Engineer.getRole()}</h2>
  </div>
  <div class="card-body">
    <h5 class="card-title">${Engineer.getId()}</h5>
    <h5 class="card-title">${Engineer.getEmail()}</h5>
    <h5 class="card-title">${Engineer.getGithub()}</h5>
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
    <h5 class="card-title">${Intern.getId()}</h5>
    <h5 class="card-title">${Intern.getEmail()}</h5>
    <h5 class="card-title">${Intern.getSchool()}</h5>
  </div>
</div>
`
};
function getTeam(teamArray) {
  const HTMLArray = [];
  const managerArray = teamArray.filter(employee => employee.getRole() === 'Manager')
    .map(manager => generateManager(manager));
  const engineerArray = teamArray.filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => generateEngineer(engineer)).join("");
  const internArray = teamArray.filter(employee => employee.getRole() === 'Intern').map(intern => generateIntern(intern))
    .join("");

    HTMLArray.push(managerArray, engineerArray, internArray);
    const output = HTMLArray.join("")
  console.log(managerArray);
  console.log(engineerArray);
  console.log(internArray);

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/style.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
  </head>
  
  <body>
      <div class="container">
      ${output}
      </div>
  </body>
  </html>`

};

module.exports = getTeam;


