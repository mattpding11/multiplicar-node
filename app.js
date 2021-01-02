// Requireds 3 tipos

const { command } = require('yargs');

// const fs = require('fs'); // paquetes propios de node

// const fs = require('express'); // paquete que no son propios de node, no son nativos, paquete que se instala, de otras personas.

// const fs = require('.(fs'); // archivos creados por nosotros en el proyecto




// const multiplicar = require('./multiplicar/multiplicar'); // Llama a archivo multiplicar

// multiplicar.crearArchivo(base); // invoca funcion de ese archivo

// console.log(multiplicar); // imprime



// let base = 'abc';

// console.log(process.argv); // Variables de entorno

/* node (nombre del archivo) (parametro que quiero agregar a las variables de proceso) 
 Ejemplo: node app --base=5
*/


const argv = require('./config/yargs').argv;

let comando = argv._[0];

let base = argv.b;
let limite = argv.l;

console.log("Argv: ",argv);
console.log("Comando: ",comando);

const {crearArchivo, listar} = require('./multiplicar/multiplicar'); // Desestructuracion


switch(comando){
    case "listar":
        listar(base, limite)
            .then(data => console.log(data))
            .catch(err => console.log(err));
    break;
    case "crear": 
    crearArchivo(base, limite)
        .then(archivo => console.log(`Archivo creado: ${archivo}`))
        .catch(err => console.log(err));
    break;
    default: console.log("comando no reconocido");
}



// let argv2 = process.argv;

// console.log("Base: "+argv.b);
// console.log("limite: "+argv.limite);

// console.log(argv2);


// let parametro = argv[2];

// let base = parametro.split("=");


// console.log("Parametro: ",parametro);
// console.log("Base: ",base[1]);


// const {crearArchivo} = require('./multiplicar/multiplicar'); // Desestructuracion

// crearArchivo(base[1])
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(err => console.log(err));


    //

    // npm init -> para iniciar proyecto    