import * as gulp from 'gulp';
import * as watch from 'gulp-watch';
import * as vinyl from 'vinyl';

import { srcPath,
         commonPath,
         rootPath } from './paths.build';
import { getFilePath } from './utils.build';
import { logFile,
         logTask } from '../plugins';

function watchSrc(file: vinyl, watchName?) {
    return gulp.src(getFilePath(file, srcPath), { base: srcPath })
        .pipe(logTask(watchName))
        .pipe(logFile({ srcFolder: srcPath }));
}

function watchCommon(file: vinyl, watchName?) {
    return gulp.src(getFilePath(file, commonPath), { base: commonPath })
        .pipe(logTask(watchName))
        .pipe(logFile({ srcFolder: rootPath }));
}

function startWatch(src, task) {
    return watch(src, task);
}

export {
    watchSrc,
    watchCommon,
    startWatch,
};