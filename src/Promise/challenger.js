// importamos la funcion
// const fetchData = require('../Util/fetchData');
const  apiFer = require('../Util/fetchData');

// declaramos la ruta de la api
const API = 'https://rickandmortyapi.com/api/character/';
const API2 = 'https://jsonplaceholder.typicode.com/users/';
const API3 = 'https://pokeapi.co/api/v2/pokemon/45';

// apiFer(API2)
//     .then(data =>   {
//         // imprimimos el numero de personajes
//         console.log(data.info.count);
//         // volvemos a hacer la promesa de pedir algo, en este caso el personaje 1: Rick
//         return apiFer(`${API3}${data.results[2].id}`);
//     })
//     .then(data => {
//         // esperamos la promesa anterior y vemos el nombre
//         console.log(data.name);
//         // volvemos a hacer la promesa, pero esta es sobre la dimension
//         return apiFer(data.origin.url)
//     })
//     .then(data => {
//         // vemos la dimension de rick
//         console.log(data.dimension);
//     })
//     // si hay error
//     .catch(err => {
//         console.log(err);
//     })


let p="1";
apiFer(API2 + p)
    // .then(data => {
    //
    //     console.log(data.name);
    //     console.log(data.username)
    // })
    .then(data => {
        let array = data

        console.log()
    })

    .catch(err => {
        console.log(err);
    })





//https://jsonplaceholder.typicode.com/users/1