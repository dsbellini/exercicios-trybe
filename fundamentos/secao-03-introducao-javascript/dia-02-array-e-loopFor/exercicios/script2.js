// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

// let fatorial = 1;

// for (let index = 10; index > 0; index -= 1) {
//   fatorial *= index;
// }

// console.log(fatorial);

// console.log("O fatorial de 10 é: " + fatorial);

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';
// let reverseWord = '';

// for (let index = 0; index < word.length; index += 1) {
//   reverseWord += word[word.length - 1 - index];
// }

// console.log(reverseWord);

// Na solução acima, a cada iteração a variável reversedWord recebe um caractere da string word. Na primeira iteração, a variável irá receber o caractere que está na última posição. Em seguida, ela irá receber o da última posição menos uma. Depois, irá receber o da última posição menos duas; e assim por diante.

// Por exemplo, para a palavra 'tryber', o tamanho (ou seja word.length) será 6. Logo, word.length - 1 será 5. Por fim, a cada iteração, é descontado (do valor 5) o valor de index, que inicia com 0 e incrementa 1 a cada iteração. Portanto, tem-se:

// Na primeira iteração, considera-se o valor na posição 5 (ou seja, word.length - 1) menos index, que é zero. Logo, 5 - 0 é igual a 5 e word[5] é igual ao caractere r. Esse será o primeiro caractere de reverseWord.
// Na segunda iteração, index foi incrementado para 1. Portanto, o caractere a ser copiado está na posição 5 - 1. Ou seja, copia-se o caractere de word[4], que é e.
// Na terceira iteração, index vale 2. Dessa forma, copia-se o caractere na posição 5 - 2. Ou seja, word[3], que é b.
// Na quarta iteração, com index sendo 3, copia-se word[2], que é y.
// Na quinta iteração, copia-se da posição 5 - 4, ou seja, word[1].
// E, por fim, quando index for igual a 5, copia-se o primeiro caractere de word (a posição 0).
// Outra solução possível é a seguinte:

// let word = 'tryber';
// let reverseWord = '';

// reverseWord = word.split('').reverse().join('');

// console.log(reverseWord);


// Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let maiorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (maiorPalavra.length < array[index].length) {
        maiorPalavra = array[index];
    }
}
console.log('A maior palavra do array é: ' + maiorPalavra);

let menorPalavra = array[0];

for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (menorPalavra.length > array[index2].length) {
        menorPalavra = array[index2];
    }
}
console.log('A menor palavra do array é: ' + menorPalavra);



