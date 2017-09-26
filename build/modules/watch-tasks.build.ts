import * as gulp from 'gulp';
import * as chalk from 'chalk';

import { startPublicTsWatch,
         startCommonTsWatch } from './typescript.build';
import { startScssWatch } from './sass.build';
import { startHtmlWatchTask } from './html.build';
import { startAssetsWatchTask } from './assets.build';

gulp.task('watch', () => {
    try {
        startPublicTsWatch();
        startScssWatch();
        startHtmlWatchTask();
        startAssetsWatchTask();

        startCommonTsWatch();

        console.log(chalk.green('Watchers registerd.  Press "CTRL + C" to cancel'));
    } catch (e) {
        console.error(e);
    }
    return Promise.resolve(true);
});