
const botao = document.getElementById('botao');
const inputNome = document.getElementById('nome');


const nomeValido = () => {
    if (inputNome.value === '') {
        throw new Error('Preencha o campo de Nome')
    } else if (!isNaN(inputNome.value)) {
        throw new Error('Coloca uma string, bisonho!')
    }
}

const enviaNome = () => {
    try {
        nomeValido();
        return document.getElementById('resultado').innerHTML = `Nome enviado!`;
    } catch (error) {
        return document.getElementById('resultado').innerHTML = `${error.message}`
    } finally {
        return inputNome.value = ''
    }
};

window.onload = () => {
botao.addEventListener('click', enviaNome);
}


