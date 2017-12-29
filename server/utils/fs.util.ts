import * as fs from 'fs';
import * as path from 'path';

function getDirNames(p) {
    return fs.readdirSync(p)
        .filter(f => fs.statSync(path.join(p, f)).isDirectory());
}

function getFileNames(p) {
    return fs.readdirSync(p)
        .filter(f => fs.statSync(path.join(p, f)).isFile());
}

export {
    getDirNames,
    getFileNames,
};