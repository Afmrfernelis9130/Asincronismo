
const  apiFer = require('../Util/fetchData');
const fetchData = require("../Util/fetchData");

// declaramos la ruta de la api
const API = 'https://rickandmortyapi.com/api/character/';
const API2 = 'https://jsonplaceholder.typicode.com/users/';
const API3 = 'https://pokeapi.co/api/v2/pokemon/45/';


// nuestra funcion asíncrona, le debemos pasar la api
const anotherFunction = async (API) => {
    // el TryCatch, para que se maneje de manera sincrónica
    try {
        // esperamos que se haga la primera llamada
        const data = await fetchData(API);

        // esperamos que se aga la segunda llamada
        const character = await fetchData(`${API}${data.results[0].id}`)

        // esperamos que se aga la tercera llamada
        const origin = await fetchData(character.origin.url);

        // imprimimos las datos de la api
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);

    } catch (error) {
        // si hay algun error lo mostramos
        console.error(error);
    }
}

console.log('before');

// mandamos a llamar nuestra api
anotherFunction(API);
console.log('After');




