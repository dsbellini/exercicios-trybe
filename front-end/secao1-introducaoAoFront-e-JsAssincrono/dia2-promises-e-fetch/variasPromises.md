O Javascript oferece quatro métodos que nos ajudam a trabalhar com várias promises:

-- Método Promise.all -- 

Promise.all([Promise1, Promise2, Promise3])

Parâmetro recebido: array de promises
Retorno: o retorno varia de acordo com a situação:
quando todas promises são resolvidas: retorna uma promise resolvida com um array com o resultado de cada promise recebida.
quando uma promise é rejeitada: retorna uma promise rejeitada com o objeto de erro retornado pela promise que foi rejeitada.



-- Método Promise.race -- 

Parâmetro recebido: array de promises
Retorno: o retorno varia de acordo com a situação:
quando a primeira promise finalizada for resolvida: retorna uma promise resolvida com o valor retornado pela primeira promise original.
quando a primeira promise finalizada for rejeitada: retorna uma promise rejeitada com o objeto o erro retornado pela promise original.

-- Método Promise.any --

Parâmetro recebido: array de promises

Retorno: o retorno varia de acordo com a situação:

quando alguma promise finalizada for resolvida: retorna uma promise resolvida com o valor retornado pela primeira promise original, ignorando qualquer outra promise que tenha sido finalizada primeiro como rejeitada.
quando todas as promise forem rejeitadas: retorna uma promise rejeitada com o objeto contendo todos os erros retornados pelas promises originais.

-- Método Promise.allSettled --

Parâmetro recebido: array de promises
Retorno: retorna uma única promise que é resolvida quando todas as promises passadas forem finalizadas. A promise é retornada com um array de objetos que contém o valor retornado por cada uma das promises originais.


