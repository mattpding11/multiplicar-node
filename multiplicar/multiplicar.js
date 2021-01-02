
const fs = require('fs');

const colors = require('colors');

let listar = (base, limite) => {

    return new Promise((resolve, rejects) =>{

        console.log(`Tabla del ${base}`.green);

        if(typeof(base) != 'number'){
            rejects(`El valor introducido '${base}' no es un numero`);}
        else{
            let data = '';
            for(let i = 1;i<=limite;i++){
                data+= `${base} * ${i} = ${base*i}\n`;
            }
            resolve(data.blue);
        }

    });

}

let crearArchivo = (base, limite) =>{
    return new Promise((resolve, rejects) =>{

        // if(!Number(base))
        //     rejects(`El valor introducido '${base}' no es un numero`);
        // valido para un numero como a = 5, y como a = '5' o a = "5"

        if(typeof(base) != 'number'){
            rejects(`El valor introducido '${base}' no es un numero`);}
        else{

            let data = '';

            for(let i = 1; i<=limite;i++){
                data+=`${base} * ${i} = ${i*base}\n`;
            }

            const fileName = 'tablas/tabla-'+base+'-limite'+limite+'.txt';
            
            fs.writeFile(fileName,data, (err) =>{
            
                if(err)
                    rejects('Error');
                else
                    resolve(fileName);
            });
        
        }
    });
}

module.exports = { // Exporta funcion en los exports del modulo nombre: nombre o nombre  
    crearArchivo,
    listar,
}

// or module.exports.crearArchivo = {...}