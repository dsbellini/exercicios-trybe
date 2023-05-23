-- Fetch -- 

fetch(URL, {}) --> o objeto de configurações é opcional, a URL é obrigatória.

O fetch retorna um promise. Precisa usar o .then para pegar o retorno.

fetch(URL).then( (response) => response.json() ).then( (data) => ' retorno desejado ').catch( (error) =>  'error');

Anota aí 📝: Você pode ter quantos then encadeados forem necessários, mas geralmente costuma-se ter apenas um catch, pois esse catch conseguirá capturar um erro que seja disparado em qualquer um dos then anteriores.