const fs = require('fs');

let tareas = [];

const cargarDB = () => {

    try {
        tareas = require('../db/data.json');
    } catch (error) {
        // si el archivo esta vacio, inicializar
        tareas = [];
    }
} 

const guardarDB = () => {

    let data = JSON.stringify(tareas);

    fs.writeFile('db/data.json', data, (err) => {
        if(err) console.log('err :', err);
    })
}

const getListado = () => {
    cargarDB();
    return tareas;
}

const getListado2 = (completado = null) => {
    console.log('completado :', completado);
    let tareasFiltered ;

    cargarDB();

    if (completado != null) {
        tareasFiltered = tareas.filter(tarea => tarea.completado === completado)
    } else {
       tareasFiltered = tareas;
    }
    console.log('tareasFiltered :', tareasFiltered);
    return tareasFiltered;
}

const crear = (descripcion) => {

    let tarea = {
        descripcion,
        completado: false
    };

    cargarDB();

    tareas.push(tarea);

    guardarDB();

    return tarea;
}

const actuarizar = (descripcion, completado = true) => {

    cargarDB();

    // let index = tareas.findIndex(tarea => {
    //     return tarea.descripcion === descripcion;
    // })
    let index = tareas.findIndex(tarea => tarea.descripcion === descripcion);

    if(index >= 0) {
        tareas[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();
    let index = tareas.findIndex(tarea => tarea.descripcion === descripcion);

    if(index >= 0 ) {
        tareas.splice(index);
        guardarDB();
        return true;
    } else {
        return false
    }
}

module.exports = {
    crear,
    getListado,
    getListado2,
    actuarizar,
    borrar
}