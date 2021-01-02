const opts = {
    base:{
        demand: true,
        alias: 'b',
    },
    limite:{
        default: 0,
        alias: 'l'
    }
};

const argv = require('yargs')
    .command('listar','Imprime en consola la tabla de multiplicar', opts)
    .command('crear','Crea archivo con tabla de multiplicar', opts)
    .argv;

    module.exports = {
        argv
    };