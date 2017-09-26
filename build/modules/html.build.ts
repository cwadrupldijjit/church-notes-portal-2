import * as gulp from 'gulp';

import { publicPath,
         constructSrcPath } from './paths.build';
import { watchSrc,
         startWatch } from './watch.build';
import { logError } from './error.build';

const htmlSrc = constructSrcPath('.html');

gulp.task('html:dev', devTask);
gulp.task('html:prod', prodTask);

function devTask() {
    return gulp.src(htmlSrc)
        .pipe(gulp.dest(publicPath))
        .on('error', logError);
}

function prodTask() {
    return gulp.src(htmlSrc)
        .pipe(gulp.dest(publicPath))
        .on('error', logError);
}

function watchTask(file) {
    return watchSrc(file, 'html:watch')
        .pipe(gulp.dest(publicPath))
        .on('error', logError);
}

function startHtmlWatchTask() {
    return startWatch(htmlSrc, watchTask);
}

export {
    startHtmlWatchTask,
};