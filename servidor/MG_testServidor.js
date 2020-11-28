//ejecutar grep -Po -R  --exclude-dir=node_modules  "(?<=require\()'.*?'(?=\))" * > ../require.txt
// entrega en servidor un fichero require.txt

const fs = require('fs')
const path = require('path');
const { exec } = require("child_process");

const ordenLinux = "grep -Po -R  --exclude-dir=node_modules  \"(?<=require\()'.*?'(?=\))\" * > ../require.txt";
const ordenWindows = "findstr /i /S \"(?<=require\()'.*?'(?=\))\" ../require.txt"
const orden=ordenLinux;
const sep = '/';
/*
exec(orden, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
*/

try {
    const data = fs.readFileSync('../require.txt', 'utf8')
    const lines = data.split(/\r?\n/);
    const sistema = ['path',
        'express',
        'helmet',
        'express-fileupload',
        'express-session',
        'compression',
        'morgan',
        'cors',
        'moment',
        'jsonwebtoken',
        'body-parser',
        'uniqid',
        'dotenv',
        'fs',
        'mysql',
        'util',
        'url',
        'child_process'];
    lines.forEach((line) => {
        //       console.log(line);
        if (line.includes(":")) {
            datos = line.split(':');
            fic = datos[1].replace(/'/g, "");
            if (!sistema.includes(fic)) {
                origen = datos[0].replace('/', sep);
                ruta = path.dirname(__dirname + sep + origen);
                //               console.log("base=>", ruta);
                fichero = path.join(ruta, fic.replace('/', sep) + '.js');
                //              console.log("Fichero=>", fichero);
                if (!fileExistsWithCaseSync(fichero)) {
                    console.log("falla =>", fichero, " en ", origen);
                    
                }
            }
        }
    });
} catch (err) {
    console.error(err)
}

function fileExistsWithCaseSync(filepath) {
    var dir = path.dirname(filepath)
    if (dir === path.dirname(dir)) {
        return true
    }
    try {
        var filenames = fs.readdirSync(dir)
        if (filenames.indexOf(path.basename(filepath)) === -1) {
            return false
        }
    } catch {
        return false;
    }
    return fileExistsWithCaseSync(dir)
}