const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];

  // 1. Print Developers
    function printDeveloper() {
        for(let i = 0; i < data.length; i++){
            if(data[i].profession === "developer"){
              console.log(data[i].name + " is a developer by profession");
            }
           }
  }

  // 2. Add Data
    function addData() {
    const name = prompt('Enter name:');
    const age = parseInt(prompt('Enter age:'));
    const profession = prompt('Enter profession:');
    data.push({ name, age, profession });
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for(let i = 0; i < data.length; i++){
      if(data[i].profession !== "admin"){
        console.log(data[i]);
      }
    }
  }
  // 4.Concatenate Array
    function concatenateArray() {
    const arr2 = [
      { name: 'Raj',age: 29,profession: 'developer',},
      {name: 'jay',age: 23,profession: 'admin',},
    ];
    const arr3 = data.concat(arr2);
    console.log(arr3);
  }
  
  // 5. Average Age
    function averageAge() {
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);
    const average = totalAge / data.length;
    console.log(`Average Age: ${average}`);
  }
  
  // 6. Age Check
    function checkAgeAbove25() {
    const above25 = data.some(person => person.age > 25);
    console.log(above25 ? 'There is at least one person above 25.' : 'No one is above 25.');
  }
  
  //7. Unique Professions
    function uniqueProfessions() {
    const professions = [...new Set(data.map(person => person.profession))];
    console.log(professions);
  }
  
  //8. Sort by Age
    function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log(data);
  }
  
  //9. Update Profession
    function updateJohnsProfession() {
        for(let i = 0; i < data.length; i++){
            if(data[i].name === "john"){
              data[i].profession = "Manager";
            }
          }
          console.log(data);
  }
  
  //10. Profession Count
    function getTotalProfessions() {
    const developerCount = data.filter(person => person.profession === 'developer').length;
    const adminCount = data.filter(person => person.profession === 'admin').length;
    console.log(`Developers: ${developerCount}, Admins: ${adminCount}`);
  }
 
