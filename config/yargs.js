const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiendte la tarea'
}
const argv = require('yargs')
    .command('crear', 'Genera una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza una tarea que estaba por hacer', { descripcion, completado })
    .command('borrar', 'Borra una tarea del listado por hacer', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}