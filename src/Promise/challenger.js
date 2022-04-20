// importamos la funcion
// const fetchData = require('../Util/fetchData');
const  apiFer = require('../Util/fetchData');
// declaramos la ruta de la api
const API = 'https://rickandmortyapi.com/api/character/';
const API2 = 'https://jsonplaceholder.typicode.com/users';

// apiFer(API3)
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


apiFer(API2)
    .then(data =>   {

        return apiFer(`${API2}${data.results[2].id}`);
    })
    .then(data => {
        // esperamos la promesa anterior y vemos el nombre
        console.log(data.name);
      
       
    })
    .then(data => {
        // esperamos la promesa anterior y vemos el nombre
        console.log(data.username);
      

    })
    .then(data => {
        // esperamos la promesa anterior y vemos el nombre
        console.log(data.email);
      
       
    })
    // si hay error
    .catch(err => {
        console.log(err);
    })

//https://jsonplaceholder.typicode.com/users/1