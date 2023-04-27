
// Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto, que tal praticar? Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.

let student = {
    nome: 'Danilo',
    email: 'bellini.daan@gmail.com',
    telefone: '11970425884',
    github: 'dsbellini',
    linkedIn: 'in/dsbellini'
}

console.log(student);

student.born = 1995;

console.log(student);

for (let key in student) {
    console.log(key, student[key]);
}

let newKey = 'lastName';
let lastName = 'Bellini';

function addProperty(object, key, value) {
    object[key] = value;
};

addProperty(student, newKey, lastName);
console.log(student);

addProperty(student, 'bornState', 'São Paulo')
console.log(student);



// Gabarito

//let student2 = {};

// function addProperty(object, key, value) {
//   object[key] = value;
// };

// addProperty(student2, 'nome', `Fulano da Silva`);
// addProperty(student2, `email`, `exemplo-fulano.silva@email.com`);
// addProperty(student2, `telefone`, `11 1111-1111`);
// addProperty(student2, `github`, `github.com/exemplo-fulano-da-silva`);
// addProperty(student2, `linkedIn`, `linkedin.com/exemplo-fulano-da-silva`);

// console.log(student2);