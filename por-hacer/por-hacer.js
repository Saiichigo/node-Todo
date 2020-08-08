const fs = require('fs');

let listadoPorHacer = [];

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        console.log(error);
    }
    // console.log(listadoPorHacer);
}

const guardarDB = () => {
    let data = JSON.stringify( listadoPorHacer );
        fs.writeFile(`db/data.json`, data, (err) => {
            if (err) console.log('Erro: err',err)
    }); 
}

const getListado = () => {
        cargarDB();
        return  listadoPorHacer
 }

 const actualizar = (descripcion, completado=true) => {

        cargarDB();
        let index = listadoPorHacer.findIndex(tarea => {
            return tarea.descripcion === descripcion
        });
        console.log(index)

        if (index >= 0) {
            listadoPorHacer[index].compleatdo === completado;
            guardarDB();
            return true;
        } else {
            return false;

        }
  }


  const borrar = (descripcion) => {

        cargarDB();
        
        let nuevoArreglo = listadoPorHacer.filter(tarea => {
            return tarea.descripcion !== descripcion;
        })

        if (nuevoArreglo.length === listadoPorHacer.length) {
            return false;
        } else {
            listadoPorHacer = nuevoArreglo;
            guardarDB();
            return true;
        }

   }


const crear = (descripcion) => {

    cargarDB();

    let porhacer = { 
        descripcion,
        completado: false
    }


    listadoPorHacer.push(porhacer);
    guardarDB()

    return porhacer;
}

module.exports = {
    crear,
    cargarDB,
    getListado,
    actualizar,
    borrar
}