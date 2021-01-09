const fs = require("fs")
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = ()=>{

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile("db/data.json", data, (err)=>{
        if(err) throw new Error("no se pudo guardar en base de datos", err)
    })

}

const cargarDB = ()=>{

    try {

        listadoPorHacer = require('../db/data.json')
        
    } catch (error) {

        listadoPorHacer = [];
        
    }
}

const borrar = (descripcion)=>{

    cargarDB()

    let nuevoArchivo = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)

    listadoPorHacer = nuevoArchivo;

    guardarDB();

}

const getListado = ()=>{

    cargarDB()

    for( let tarea of listadoPorHacer)
    {
        console.log("========= Por Hacer =========".green);
        console.log("Tarea:",tarea.descripcion.yellow);
        console.log("Estado: ", tarea.completado);
        console.log("=============================".green);
    }
}

const actualizar = (descripcion, completado=true)=>{

    cargarDB()

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion)

    if(index >= 0)
    {
        listadoPorHacer[index].completado= completado;
        guardarDB();
    }

}

const crear = (descripcion)=>{

    cargarDB();

    let porHacer={
        descripcion,
        completado: false

    };

    listadoPorHacer.push(porHacer);
    guardarDB()

    return porHacer;
}

module.exports={
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}