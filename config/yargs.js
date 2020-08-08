const descripcion = {
        demand: true,
        alias: 'd',
        desc: 'descripcion de una tarea'

}
const completado = {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
.command('crear','Crea un nuevo TODO', {descripcion})
.command('actualizar','Actualizar el estado de un TODO', {descripcion, completado})
.command('borrar','Borra un todo', {

    descripcion: {
        demand: true,
        alias: 'b',
        desc: 'elimina  una tarea'
    }
})
.help()
.argv;


module.exports = { 
    argv
}
