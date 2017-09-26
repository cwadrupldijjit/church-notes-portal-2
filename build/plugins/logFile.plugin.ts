import * as path from 'path';
import * as through from 'through2';
import * as chalk from 'chalk';

const WIN_FOLDER_SEPARATOR = path.win32.sep;
const NIX_FOLDER_SEPARATOR = path.posix.sep;
const WIN_SEPARATOR_REGEX = new RegExp(WIN_FOLDER_SEPARATOR + WIN_FOLDER_SEPARATOR, 'g');
const ON_NIX = path.sep == path.posix.sep;

function plugin(options = <{[key: string]: any}> {}) {
    let root = options.root || NIX_FOLDER_SEPARATOR;
    let srcFolder = options.srcFolder || NIX_FOLDER_SEPARATOR;
    
    root = forwardToBackSlash(root);
    srcFolder = forwardToBackSlash(srcFolder);
    
    const stream = through.obj(function(file, enc, cb) {
        if (file.isBuffer()) {
            let historyEntry = forwardToBackSlash(file.history[0]);
            let path = root + historyEntry.slice(historyEntry.indexOf(srcFolder) + srcFolder.length);
            let firstCharOfFilename = path.lastIndexOf(NIX_FOLDER_SEPARATOR) + 1;
            let filename = path.slice(firstCharOfFilename);
            path = path.slice(0, firstCharOfFilename);
            
            console.log('Processing file %s at path %s', chalk.green(filename), chalk.cyan(path));
        }
        
        // this.push(file);
        cb(null, file);
    });
    
    return stream;
}

function forwardToBackSlash(p: string) {
    p = path.win32.normalize(p);
    
    if (WIN_SEPARATOR_REGEX.test(p)) {
        p = p.replace(WIN_SEPARATOR_REGEX, NIX_FOLDER_SEPARATOR);
    }
    
    return p;
}

export default plugin;