// declaramos la ruta de la api
const API = 'https://rickandmortyapi.com/api/character/';
const API2 = 'https://jsonplaceholder.typicode.com/users';
const API3 = 'https:/pokeapi.co/api/v2/pokemon/45/';




fetch(API2)

    .then(response =>
        response.json())
    .then(data =>mostraDatos(data))
    .catch(err =>console.log(err))

const mostraDatos = (data)=>{


   const list = data.map(a => `<li>${a.name}</li>` )

    document.getElementById("list"). innerHTML=list

}


