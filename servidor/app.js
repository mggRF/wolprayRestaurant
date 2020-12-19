/**
 * aplicacion express
 * 
 */

'use strict'

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
// const fileUpload = require('express-fileupload');
var multipart = require('connect-multiparty');
const path = require('path');
const rfs = require('rotating-file-stream') // version 2.x
const express_logger = require('express-logger-unique-req-id');

const {IT_IS_SECURE} = require('./Constantes/ConstantesSeguridad');

var multipartMiddleware = multipart({uploadDir: '../uploads'});
const { UPLOADS, COMUNIDADES, PAISES, POBLACIONES, PROVINCIAS, USERS, ROLES, COMPANIES, PRODUCTS , LOCALS, MENU, MENU_PLATOS, GRUPOS, LOCALCITY, IVA, VERSION} = require('./Constantes/ConstantesRutas');


const app = express();
app.use(helmet());
app.use(cors({origin: true}));
app.use(compression()); //Compress all routes


// Importamos las rutas
const rGlobal = require('./rutas/rutaGlobal');
const rComunidades = require('./rutas/rutaComunidades');
const rPais = require('./rutas/rutaPaises');
const rPoblacion = require('./rutas/rutaPoblacion');
const rProvincia = require('./rutas/rutaProvincias');
const rLocals = require('./rutas/rutaLocals');
const rMenu = require('./rutas/rutaMenu');
const rMenuPlatos = require('./rutas/rutaMenuPlatos');
const rGrupos = require('./rutas/rutaGrupos');
const rLocalCity = require('./rutas/rutaLocalCity');
const rUsers = require('./rutas/rutaUsers');
const rRoles = require('./rutas/rutaRoles');
const rCompanies = require('./rutas/rutaCompanies');
const rProducts = require('./rutas/rutaProducts');
const rIva = require('./rutas/rutaIva');
const Autorizado = require('./Autentificacion/middelAut');


//cargar middlewares
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//Subida de imagenes
// app.use(fileUpload({
//     useTempFiles: true
// }));


// Cargamos las rutas

//app.use(UPLOADS,rImagenes)
app.use(COMUNIDADES, Autorizado, rComunidades);
app.use(PAISES, Autorizado, rPais);
app.use(POBLACIONES, Autorizado, rPoblacion);
app.use(PROVINCIAS, Autorizado, rProvincia);
app.use(LOCALS, Autorizado, rLocals);
app.use(MENU, Autorizado, rMenu);
app.use(MENU_PLATOS, Autorizado, rMenuPlatos);
app.use(GRUPOS, Autorizado, rGrupos);
app.use(USERS, Autorizado, rUsers);
app.use(LOCALCITY, Autorizado, rLocalCity);
app.use(ROLES, Autorizado, rRoles);
app.use(COMPANIES, Autorizado, rCompanies);
app.use(IVA, Autorizado, rIva);
app.use(PRODUCTS, Autorizado, rProducts);
//app.use(IMAGES, Autorizado, rImages);

app.use('/' + VERSION, rGlobal);

console.log('entra',VERSION,PRODUCTS)

if (process.env.NODE_ENV && process.env.NODE_ENV == 'production') {
    // create a rotating write stream
    var accessLogStream = rfs.createStream('access.log', {
        interval: '1d', // rotate daily
        path: path.join(__dirname, 'log')
    })
    console.log("Produccion");
    app.use(morgan('combined',{stream: accessLogStream }));
} else {
    console.log("desarrollo");
    app.use(morgan('combined'));
}
//****************************Loggers */
//logger configuration
const fileConf = {
    level: 'debug',
    filename: './logs.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    timestamp: true
};

const consoleConf = {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    timestamp: true
};

express_logger.initializeLogger(app, fileConf, consoleConf);
let logger = express_logger.getLogger();


logger.debug('First message');

// Enable reverse proxy support in Express. This causes the
// the "X-Forwarded-Proto" header field to be trusted so its
// value can be used to determine the protocol. See 
// http://expressjs.com/api#app-settings for more details.
app.enable('trust proxy');

// Add a handler to inspect the req.secure flag (see 
// http://expressjs.com/api#req.secure). This allows us 
// to know whether the request was via http or https.
// app.use(function (req, res, next) {
    
//     if (IS_IT_SECURE && !req.secure){
//         res.redirect('https://' + req.headers.host + req.url);
//     }
//     else if (!IS_IT_SECURE && req.secure ){
//         res.redirect('http://' + req.headers.host + req.url);

//     }
//     else{
//         next();
//     }
//     /*if (req.secure && IT_IS_SECURE) {
//         console.log('https');
//         // request was via https, so do no special handling
//         next();
//     } else {
//         console.log('http',req.headers.host);
//         // request was via http, so redirect to https
//        // res.redirect('https://' + req.headers.host + req.url);
//        next();
//     }*/
// });
module.exports = app;