const argv = require('yargs')
.command("crear", "crear una nueva tarea", {
    descripcion: {
        demand: true,
        alias: "d",
        desc: "Descripcion de la tarea"
    }
})
.command("listar", "Muestra las tareas pendientes y completadas", {

})
.command("borrar", "Borra un elemento de la base de datos", {
    descripcion:{
        demand: true,
        alias: "d"
    }
})
.command("actualizar", "Actauliza el estado de una tarea", {
    descripcion: {
        demand: true,
        alias: "d",
        desc: "Actualiza una tarea especifica"
    },
    completado:{
        dafault: true,
        alias: "c",
        desc: "Marca como completado la tarea"
    }
})
.help()
.argv

module.exports={
    argv
}

