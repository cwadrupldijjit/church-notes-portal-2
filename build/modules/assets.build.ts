import * as gulp from 'gulp';

import { publicPath,
         assetSrc } from './paths.build';
import { watchSrc,
         startWatch } from './watch.build';
import { logError } from './error.build';

gulp.task('assets:dev', devTask);
gulp.task('assets:prod', prodTask);

function devTask() {
    return gulp.src(assetSrc)
        .pipe(gulp.dest(publicPath))
        .on('error', logError);
}

function prodTask() {
    return gulp.src(assetSrc)
        .pipe(gulp.dest(publicPath))
        .on('error', logError);
}

function watchTask(file) {
    return watchSrc(file, 'assets:watch')
        .pipe(gulp.dest(publicPath))
        .on('error', logError);
}

function startAssetsWatchTask() {
    return startWatch(assetSrc, watchTask);
}

export {
    startAssetsWatchTask,
};