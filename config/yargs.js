const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer, actualizar o borrar'
};

const completado = {
    // default: true,
    default: null,
    alias: 'c',
    desc: 'Marca como completado o pendiente una tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Eliminar una tarea', {
        descripcion
    })
    .command('listar', 'Listar tareas', {
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}