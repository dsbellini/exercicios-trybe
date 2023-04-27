// // Gabarito

// let student1 = {
//     html: 'Muito Bom',
//     css: 'Bom',
//     javascript: 'Ótimo',
//     softskills: 'Ótimo',
//   };
  
//   let student2 = {
//     html: 'Bom',
//     css: 'Ótimo',
//     javascript: 'Ruim',
//     softskills: 'Ótimo',
//     git: 'Bom', // chave adicionada
//   };
  
//   function listSkills(student) {
//     let arrayOfSkills = Object.keys(student);
//     for (let index in arrayOfSkills) {
//       console.log(arrayOfSkills[index] + ', Nível: ' + student[arrayOfSkills[index]]);
//     }
//   };
  
//   console.log('Estudante 1');
//   listSkills(student1);
  
//   console.log('Estudante 2');
//   listSkills(student2);



// let student = {
//   html: 'Muito Bom',
//   css: 'Bom',
//   javascript: 'Ótimo',
//   softskill: 'Ótimo',
// };

// function listSkillsValuesWithFor(student) {
//   let skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

// function listSkillsValuesWithValues(student) {
//   return Object.values(student);
// }

// // Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));

let countries = {
    franca: 'Paris',
    brasil: 'Brasília',
    espanha: 'Madrid',
    portugal: 'Lisboa',
  };
  let pairKeyValue = Object.entries(countries);
  console.log(pairKeyValue);

  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };