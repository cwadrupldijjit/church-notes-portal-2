import * as path from 'path';
import * as vinyl from 'vinyl';

const WIN_FOLDER_SEPARATOR = '\\';
const NIX_FOLDER_SEPARATOR = '/';
const WIN_SEPARATOR_REGEX = new RegExp(WIN_FOLDER_SEPARATOR + WIN_FOLDER_SEPARATOR, 'g');

function getFilePath(file: vinyl, srcFolder: string, root = NIX_FOLDER_SEPARATOR) {
    const historyEntry = normalizePath(file.history[0]);
    srcFolder = normalizePath(srcFolder);
    const parentToSrcFolder = srcFolder.slice(0, srcFolder.lastIndexOf('/', srcFolder.length - 2))
    
    const p = root + historyEntry.slice(historyEntry.indexOf(parentToSrcFolder) + parentToSrcFolder.length);
    return './' + p;
}

function forwardToBackSlash(p: string) {
    if (p.includes(WIN_FOLDER_SEPARATOR)) {
        p = p.replace(WIN_SEPARATOR_REGEX, NIX_FOLDER_SEPARATOR);
    }
    
    return p;
}

function normalizePath(p: string) {
    return forwardToBackSlash(path.normalize(p));
}

export {
    getFilePath,
    forwardToBackSlash,
    normalizePath,
};