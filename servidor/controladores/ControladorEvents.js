/**
 * Controlador para Poblaciones
 * recibe llamadas para editar, añadir, listar y borrar comunidades
 */
const ControladorBase = require("./ControladorBase");

const MODELO = require("../modelos/Events");
const {QueriesEvents} = require("../queries/QueriesEvents");
const TABLA = 'events';
const CARPETA = 'products';
const CAMPO = 'event_imagePral';

class ControladorEvents extends ControladorBase {
    constructor(){
        let config = {
            CARPETA: {
                CARPETA,
                CAMPO,
                nombreFoto: 'principal.jpg'
            },
            TABLA: TABLA,
            QUERIES: QueriesEvents,
            MODELO: MODELO,
            campoId: 'eventid',
            carpetaImagenes:'events'
        }
        super(config);
    }   
}

module.exports = ControladorEvents;