// crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

const nomePessoa = (nomeCompleto) => {

    const emailUnderline = nomeCompleto.split(" ").join("_");
    return `${emailUnderline}@trybe.com`
}

const newEmployees = () => {
    const employees = {
      id1: nomePessoa('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: nomePessoa('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: nomePessoa('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
console.log(newEmployees());