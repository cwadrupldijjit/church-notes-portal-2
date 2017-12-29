import * as path from 'path';
import * as yargs from 'yargs';
import * as chalk from 'chalk';
import { runFixtures, bootstrapDb } from './server/database';
import { getDirNames } from './server/utils/index';

yargs
//     .usage('\nUsage: $0 <command> <subcommand> [options]')
//     .command(
//         'db',
//         'Interface with the Database',
//         (ydb) => {
//             process.stdout.write('set up db\n');
            // ydb
                .usage('\nUsage: $0 db <command> [options]')
                .command('fixture-run [type]', 'Run database fixtures.', y => {
                    // process.stdout.write('set up fixture-run');
                    y.positional('type', {
                        describe: 'The type of fixture to run.  Default is "default"',
                        choices: getDirNames(path.join(__dirname, 'server', 'database', 'fixtures')),
                        default: 'default',
                    });
                    
                    return y;
                }, args => {
                    // process.stdout.write('executing fixture:run');
                    if (!args.help) {
                        if (args.verbose) console.log(chalk.blue('Bootstrapping the database.'));
                        
                        bootstrapDb()
                            .then(() => {
                                if (args.verbose) console.log(chalk.blue('Executing run fixtures command'));
                                
                                runFixtures(args._[2])
                                    .then(() => process.exit(0))
                                    .catch(err => {
                                        if (args.verbose) return console.error(chalk.red(err));
                                        
                                        console.error(chalk.red(err.message));
                                        console.warn(chalk.yellow('In order to see more details, run with the --verbose flag'));
                                        process.exit(1);
                                    });
                            })
                            .catch(err => {});
                    }
                })
                .argv;
                
    //         return ydb;
    //     },
    //     () => {
    //         process.stdout.write('executing db\n');
    //         return true;
    //     }
    // )
    // .option('verbose', {
    //     alias: 'v',
    //     default: false,
    //     description: 'Run with logging; verbose mode'
    // })
    // .argv;