import * as fs from 'fs';
import * as path from 'path';
import * as chalk from 'chalk';

import { getDirNames, getFileNames } from '../../utils';

async function runFixtures(type = 'default') {
    const dirPath = path.join(__dirname, type);
    
    if (!fs.existsSync(dirPath))
        throw `Fixtures of type ${
            type
        } do not exist!  Valid types are (* indicates default):\n\t${
            getDirNames(__dirname).map(n => n == 'default' ? `*${n}` : n).join('  ')
        }`;
    
    let successes = 0;
    let errors = 0;
    
    return Promise.all(
        getFileNames(dirPath)
            .reduce((ps, f) => {
                return [
                    ...ps,
                    ...require(path.join(dirPath, f)).default(),
                ] as Promise<any>[];
            }, [] as Promise<any>[])
            .map(p => p.then(() => successes++).catch(e => ++errors))
    )
    .then(all => {
        console.log(`\nTotal fixtures: ${all.length}.  ${chalk.green(`Successes: ${successes}.`)}  ${chalk.red(`Errors: ${errors}.`)}`);
        if (errors) {
            console.log(chalk.yellow(`Please check the logging output above to see what errors the fixtures encountered`));
        }
    });
}



export {
    runFixtures,
};