let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API="https://rickandmortyapi.com/api/character/";

function fetcData(url_api,callback){//esta funcion es para llamar la api

 let xhttp = new XMLHttpRequest();//instancia para poder usar los metodos de HttpRequest
 xhttp.open('GET' , url_api, true);//aqui abrimos a conexion mediante el "GET " y el parametro que le pasemos a la funcion
xhttp.onreadystatechange = (event)=>{//estamos atento al cualquier cambio de estado los estados van del 0 al 4
 if(xhttp.readyState ===4){//VALIDANDO SI ESTA CORRECTO
  if(xhttp.status === 200){//PARA SABER SI ES ESTATUS SE COMPLETO CORRECTO
   callback(null, JSON.parse(xhttp.responseText));//HAGO LA LLAMADA A LA API MEDIANTE CALLBACK(NOTA: TE TRAE LOS DATOD EN JSON TIENES QUE PARSEARLO A HTTP)
  }else{
   const error = new Error('Error: ' + url_api);//por si da algun -tipo de error
   return callback(error,null);
  }
 }
}
xhttp.send();
 }


 fetcData(API,(error1,data1)=>{//LLAMADA DE LA FUNCION
  if(error1) return console.log(error1);//VALIDAR SI HAY ALGUN ERROR SI LO HAY QUE MUETRE ALGO EN CONSOLA

  fetcData(API + data1.results[0].id, (error2,data2)=> {//LLAMADA DE LA FUNCION PARA OBTNER EL ID EN LA IP
   if (error2) return console.log(error2);//VALIDAR SI HAY ALGUN ERROR SI LO HAY QUE MUETRE ALGO EN CONSOLA

   fetcData(data2.origin.url, (error3, data3) => {//LLAMADA DE LA FUNCION PARA OBTNER EL ORIGEN EN LA IP
    if (error3) return console.log(error3);//VALIDAR SI HAY ALGUN ERROR SI LO HAY QUE MUETRE ALGO EN CONSOLA

    console.log(data1.info.count);//MUESTA EL TOTAL DE PERSONAJE QUE TIENE ESA API
    console.log(data2.name);// MUESTRA EL NOMBRE DEL PERSONAJES QUE LE PASASTE PARA QUE BUSCARA
    console.log(data3.dimension);//MUESTRA LA DIMENSION DEL PERSONAJES QUE LLAMASTE
   })

  })

 })