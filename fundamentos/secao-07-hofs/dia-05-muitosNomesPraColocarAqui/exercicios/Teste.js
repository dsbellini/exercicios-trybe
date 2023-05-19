// function createLocation() {
//   const object = {};
//   data.species.forEach((specie) => {
//     if (!object[specie.location]) {
//       object[specie.location] = [];
//     }
//     object[specie.location].push(specie.name);
//   });
//   return object;
// }

// function createAnimalNames(sorted, sex) {
//   let regions = { NE: [], NW: [], SE: [], SW: [] };
//   data.species.forEach((specie) => {
//     let animalNames;
//     if (sex) {
//       animalNames = specie.residents.filter((animal) => animal.sex === sex).map(({ name }) => name);
//     } else {
//       animalNames = specie.residents.map(({ name }) => name);
//     }
//     if (sorted) {
//       animalNames.sort();
//     }
//     regions[specie.location].push({ [specie.name]: animalNames });
//   });
//   return regions;
// }

// function getAnimalMap(options = {}) {
//   const { includeNames, sorted, sex } = options;
//   let object = {};
//   if (includeNames) {
//     object = createAnimalNames(sorted, sex);
//   } else {
//     object = createLocation();
//   }
//   return object;
// }