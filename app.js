// tambien puedo desestructurar el argv para no agregar el .argv al final
const { argv } = require("./config/yargs");
const { crear } = require('./por-hacer/por-hacer');
const porHacer = require("./por-hacer/por-hacer");
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea)
        console.log('crear por hacer');
    break;

    case 'actualizar': 
            
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);

    break;

    case 'listar':

        let listado = porHacer.getListado();

        for (const tarea of listado) {

            console.log('========Tareas========='.green)
            console.log('Nombre:', tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('======================='.green)
            
        }
        
    break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion)
        console.log(borrado);
    break;

    default:
        console.log('Comando no reconocido ')
        break;
}
// console.log( argv );


