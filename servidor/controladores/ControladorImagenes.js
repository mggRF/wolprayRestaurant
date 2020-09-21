const ControladorBase = require("./ControladorBase");
const { QueriesImages } = require("../queries/QueriesImages");

const { URL, VERSION } = require('../Constantes/ConstantesRutas');
let clubs = 'clubs';
let products = 'products';
let promotions = 'promotions';
let events = 'events';
let clubevents = 'clubevents';
class ControladorImagenes extends ControladorBase {


    constructor() {
        let config = {
            TABLAS: {
                clubs,
                products,
                promotions,
                events,
                clubevents
            },
            OPCIONES: [clubs,
                products,
                promotions,
                events,
                clubevents]
        }
        super(config);
        this.getImagebyOption = this.getImagebyOption.bind(this);
    }

    getImagebyOption(req, res) {

        let numParams = Object.getOwnPropertyNames(req.params);

        const { opcion, id } = req.params;
        var queries = QueriesImages[opcion];
        const tabla = this.config.TABLAS[opcion];
        switch (numParams.length) {
            case 0:
                this.mostrarDatosRandom(res);
                break;
            case 1:
                this.obtenerDatos(opcion, res, queries, tabla);
                break;
            case 2:
                this.obtenerDatos(opcion, res, queries, tabla, id);
                break;
            case 3:
                this.mostrarMultiplesFotos(opcion, res, queries, tabla, id);
                break;
            default:
                this.enviaDatos(res, 'Acción inválida', 500);
                break;

        }
    }

    mostrarDatosRandom(res) {
        let maxRan = Object.getOwnPropertyNames(QueriesImages);
        let random = this.getRandomInt(1, maxRan.length);
        let opcionRandom = this.config.OPCIONES[random];
        var queriesRandom = QueriesImages[opcionRandom];
        let tablaRandom = this.config.TABLAS[opcionRandom];
        this.obtenerDatos(opcionRandom, res, queriesRandom, tablaRandom);
    }

    mostrarMultiplesFotos(opcion, res, queries, tabla, id) {
        var query = query = queries.select_by_id.replace(':id', id);
        let images = this.fileSystem.getAllImagesInAId(opcion, id);
        let sql = query.replace(/:TABLA/gi, tabla);
        this.leerYPreparar(sql, images, tabla, opcion);
    }

    leerYPreparar(sql, images, tabla, opcionRandom) {
        let imagesUrl = [];
        this.connect.leerSql(sql)
            .then(datos => {
                if (datos.length > 0) {
                    let dat = datos.map(dat => {
                        if (dat['image'] && dat['image'].includes('.')) {
                            dat['image'] = `${URL}${VERSION}/uploads/${opcion}/${dat['id']}/${dat['image']}`;
                        } else {
                            dat['image'] = `${URL}${VERSION}/uploads/nofile.jpg`;
                        }
                        dat['comment'] = null;
                        dat['url'] = null;


                        if (Array.isArray(images)) {

                            if (images.length > 0) {
                                images.map((image) => {
                                    imagesUrl = [...imagesUrl, `${URL}${VERSION}${opcion}/uploads/${dat['id']}/${image}`];
                                });
                            }
                        }
                        dat['images'] = imagesUrl;
                        dat['tabla'] = tabla;
                        return dat;
                    });
                    this.enviaDatos(res, dat, null);

                }
            }).catch(err => console.log(err));
    }



    obtenerDatos(opcion, res, queries, tabla, id = null) {
        var query = '';
        let images = '';
        if (id !== null) {
            if (!isNaN(id)) {
                query = queries.select_by_id.replace(':id', id);
            } else {
                query = queries.select_all;
            }
        } else {
            query = queries.select_by_option;
        }
        console.log('Select: ', query)
        sql = query.replace(/:TABLA/gi, tabla);
        leerYPreparar(sql, images, tabla, opcion);
    }



    getRandomInt(min, max) {
        let ran = Math.floor(Math.random() * (max - min)) + min;
        return ran;
    }

}

module.exports = ControladorImagenes;