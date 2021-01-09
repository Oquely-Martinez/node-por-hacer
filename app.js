//const argv = require('yargs').argv

const argv = require('./config/yargs').argv

const { guardarDB } = require('./por-hacer/por-hacer');
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch(comando){

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea)
        break;
    
    case 'listar':
        porHacer.getListado()
        break;

    case 'actualizar':
        porHacer.actualizar(argv.descripcion, argv.completado)
        break;
    
    case 'borrar':
        porHacer.borrar(argv.descripcion);
        break;

    
    default: 
        console.log("Comando Invalido")

}

console.log(argv);