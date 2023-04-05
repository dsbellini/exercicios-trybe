// Crie duas funções JavaScript com as seguintes especificações:
// Não se esqueça de usar template literals

// Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.
// O nome da função deverá ser substituaX.
// A função deverá receber um nome por parâmetro.
// Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!'.
// A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

// Exemplo:

// Parâmetro: ‘Bebeto’
// Retorno: ‘Tryber Bebeto aqui!’
// Spoiler: O método split() pode ser utilizado de diferentes maneiras, por exemplo para separar as palavras de um texto.

function substituaX (nome) {
    const frase = 'Tryber x aqui!';
    const removerX = frase.split('x').join(nome);
    nome = removerX;
    return nome;
}
//console.log(substituaX('Danilo'));


// Função 2: Escreva uma função que receberá o retorno da Função 1 por parâmetro e retornará uma nova string.

// O nome da função deverá ser minhasSkills.
// A função deverá receber o retorno da Função 1 - substituaX por parâmetro.
// Declare dentro da função uma variável com o nome skills e do tipo const.
// A variável skills deverá ser um array que contenha três strings com tecnologias que você já estudou.
// Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.

// Exemplo de retorno:
// Tryber Bebeto aqui!

// Minhas três principais habilidades são:
// JavaScript
// HTML
// CSS

function minhasSkills (func) {
    const skills = ['HTML','CSS','JavaScript'];
    let resultado = `${func}
    Minhas três principais habilidades são:
    ${skills}`;
    return resultado;
}

console.log(minhasSkills(substituaX('Danilo')));