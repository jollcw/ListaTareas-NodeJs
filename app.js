// const argv = require("yargs").argv;
const argv = require("./config/yargs").argv;
const colors = require("colors");

const porHacer = require("./por-hacer/por-hacer");

console.log("argv :", argv);

let comando = argv._[0];

/* 
tareas
crear
listar
actualizar
*/

switch (comando) {
  case "crear":
    console.log("Crear tarea");
    let tarea = porHacer.crear(argv.descripcion);
    console.log("tarea :", tarea);
    break;

  case "listar":
    console.log("Listar tareas");
    // let tareas = porHacer.getListado();
    let tareas = porHacer.getListado2(argv.completado);
    for (const tarea of tareas) {
      console.log("======= Tarea =======".green);
      console.log(tarea.descripcion);
      console.log("completado: ", tarea.completado);
      console.log("======================".green);
    }
    break;

  case "actualizar":
    console.log("actualizar tarea");
    let actualizado = porHacer.actuarizar(argv.descripcion, argv.completado);
    console.log("actualizado :", actualizado);
    break;

  case "borrar":
    let borrado = porHacer.borrar(argv.descripcion);
    console.log("borrado :", borrado);
    break;

  default:
    console.log("Comando no encontrado");
    break;
}
