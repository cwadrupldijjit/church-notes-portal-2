import * as gulp from 'gulp';
import * as scss from 'gulp-sass';
import * as sourcemaps from 'gulp-sourcemaps';
import * as cleanCss from 'gulp-clean-css';

import { publicPath,
         constructSrcPath } from './paths.build';
import { watchSrc,
         startWatch } from './watch.build';
import { logError } from './error.build';

const scssPath = constructSrcPath('.scss');

gulp.task('scss:dev', devTask);
gulp.task('scss:prod', prodTask);

function devTask() {
    return gulp.src(scssPath)
        .pipe(sourcemaps.init())
            .pipe(scss().on('error', scss.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(publicPath))
        .on('error', logError);
}

function prodTask() {
    return gulp.src(scssPath)
        .pipe(scss().on('error', scss.logError))
        .pipe(cleanCss())
        .pipe(gulp.dest(publicPath))
        .on('error', logError);
}

function watchTask(file) {
    return watchSrc(file, 'sass:watch')
        .pipe(sourcemaps.init())
            .pipe(scss().on('error', scss.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(publicPath))
        .on('error', logError);
}

function startScssWatch() {
    return startWatch(scssPath, watchTask);
}

export {
    startScssWatch,
};