import * as through from 'through2';
import * as chalk from 'chalk';

const PLUGIN_NAME = 'log-task';

const plugin = (name?: string) => {
    return through.obj((file, enc, cb) =>  {
        if (name) {
            console.log(`${ chalk.magenta(name) } is running`);
        }
        
        cb(null, file);
    });
};

export default plugin;