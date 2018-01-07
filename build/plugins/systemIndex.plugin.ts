import * as path from 'path';
import * as through from 'through2';
import * as chalk from 'chalk';
import * as vinyl from 'vinyl';
import * as fs from 'fs';

const folderRegistry = {};

function plugin(options = <{[key: string]: any}> {}) {
    const rootPath = path.normalize(options.root || path.sep);
    const srcFolder = path.normalize(options.srcFolder || path.sep);
    const pathToConfig = path.normalize(options.configPath || srcFolder + '/system.config.ts');
    const pathToDist = path.normalize(options.destFolder);
    const transformedSysPath = path.normalize(pathToDist + '/system.config.js');
    
    const stream = through.obj(function(file: vinyl, enc, cb) {
        if (file.isBuffer()) {
            const dirname = file.dirname.slice(srcFolder.length);
            
            if (!folderRegistry[dirname]) {
                folderRegistry[dirname] = true;
            }
            
            if (file.basename == 'system.config.ts') {
                file.contents = Buffer.from(
                    file
                        .contents
                        .toString()
                        .replace(
                            /\/\/ <local-modules>[\s\S]*\/\/ <end-local-modules/m,
                            getFolderRegistryList(),
                        )
                );
            }
            else if (fs.existsSync(transformedSysPath) && !folderRegistry[dirname]) {
                fs.writeFileSync(
                    transformedSysPath,
                    fs.readFileSync(
                        transformedSysPath,
                        'utf8',
                    )
                    .replace(/\/\/ <local-modules>[\s\S]*\/\/ <end-local-modules/m, getFolderRegistryList())
                );
            }
        }
        
        cb(null, file);
    });
    
    return stream;
    
    function getFolderRegistryList() {
        return '// <local-modules>' +
            Object.keys(folderRegistry)
                .map(p => p ? `\n        '/${path.posix.normalize(p).replace(/\\/g, '/')}': {\n            main: 'index.js'\n        },` : '')
                .join('') +
            '\n        // <end-local-modules>';
    }
}

export default plugin;