// declaramos la ruta de la api
const API = 'https://rickandmortyapi.com/api/character/';
const API2 = 'https://jsonplaceholder.typicode.com/users';
const API3 = 'https:/pokeapi.co/api/v2/pokemon/45/';


let array = [];

fetch(API2)

    .then(response =>
        response.json())
    .then(data => {

        array = data;

        let newArray = array.map((a) => a.name);

        console.log(newArray)


    })