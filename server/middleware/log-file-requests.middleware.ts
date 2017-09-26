import * as fs from 'fs';
import * as path from 'path';
import * as chalk from 'chalk';
import * as express from 'express';

const WIN_SEP_REGEX = new RegExp(path.win32.sep + path.win32.sep, 'g');

function logFileRequests(projectRoot: string, options = {} as {[key: string]: any}) {
    let { webrootPath, nodeModulePath } = options;
    
    if (typeof projectRoot != 'string') {
        throw Error('You must specify the projectRoot as a string');
    }
    
    projectRoot = normalizeFilePath(projectRoot);
    
    if (projectRoot.slice(-1) != '/') {
        projectRoot = projectRoot + '/';
    }
    
    if (webrootPath.slice(-1) != '/') {
        webrootPath = webrootPath + '/';
    }
    
    nodeModulePath = normalizeFilePath(nodeModulePath || projectRoot + 'node_modules');
    
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (req.method == 'GET' || req.baseUrl.match(/\.[a-z]+$/)) {
            let filePath = projectRoot;
            let requestPath = req.originalUrl;
            
            if (requestPath[0] == '/') {
                requestPath = requestPath.slice(1);
            }
            
            if (requestPath.includes('node_modules') ||
                requestPath.includes('/common')
            ) {
                filePath += requestPath;
            } else {
                filePath = normalizeFilePath(webrootPath + requestPath);
            }
            
            if (!fs.existsSync(filePath)) {
                console.log(
                    chalk.bold.yellow('Warning: Could not find file for path'),
                    chalk.bold.white(requestPath)
                );
                console.log(
                    chalk.bold.yellow('Tried to read file at'),
                    chalk.bold.white(filePath)
                );
            } else {
                console.log(
                    chalk.bold.cyan('File'),
                    chalk.bold.white(filePath),
                    chalk.bold.cyan('served successfully!')
                );
            }
        }
        
        next();
    };
}

function normalizeFilePath(p: string) {
    p = path.win32.normalize(p);
    
    if (WIN_SEP_REGEX.test(p)) {
        p = p.replace(WIN_SEP_REGEX, path.posix.sep);
    }
    
    return p;
}

// function getFilePath(file: vinyl, srcFolder: string, root = NIX_FOLDER_SEPARATOR) {
//     const historyEntry = normalizeFilePath(file.history[0]);
//     srcFolder = normalizeFilePath(srcFolder);
//     const parentToSrcFolder = srcFolder.slice(0, srcFolder.lastIndexOf('/', srcFolder.length - 2))
    
//     const p = root + historyEntry.slice(historyEntry.indexOf(parentToSrcFolder) + parentToSrcFolder.length);
//     return './' + p;
// }

export default logFileRequests;