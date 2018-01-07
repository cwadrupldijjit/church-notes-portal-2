import * as gulp from 'gulp';
import * as tsc from 'gulp-typescript';
import * as sourcemaps from 'gulp-sourcemaps';

import { rootPath,
         publicPath,
         constructSrcPath,
         publicTsSrc,
         commonTsSrc,
         commonPath, 
         srcPath} from './paths.build';
import { watchSrc,
         watchCommon,
         startWatch } from './watch.build';
import { logError } from './error.build';
import { systemIndex } from '../plugins';

const systemIndexPrepared = systemIndex({
    root: rootPath,
    srcFolder: srcPath,
    destFolder: publicPath,
});

gulp.task('tsc:public:dev', getPublicDevTask());
gulp.task('tsc:common:dev', getCommonDevTask());
gulp.task('tsc:public:prod', getPublicProdTask());
gulp.task('tsc:common:prod', getCommonProdTask());

function getPublicDevTask() {
    return () => gulp.src(publicTsSrc)
        .pipe(sourcemaps.init())
            .pipe(systemIndexPrepared)
            .pipe(createPublicTsProject()())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(publicPath))
        .on('error', logError);
}

function getCommonDevTask() {
    return () => gulp.src(commonTsSrc)
        .pipe(sourcemaps.init())
            .pipe(createCommonTsProject()())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(commonPath))
        .on('error', logError);
}

function getPublicProdTask() {
    return () => gulp.src(publicTsSrc)
        .pipe(systemIndexPrepared)
        .pipe(createPublicTsProject()())
        .pipe(gulp.dest(publicPath))
        .on('error', logError);
}

function getCommonProdTask() {
    return () => gulp.src(commonTsSrc)
        .pipe(createCommonTsProject()())
        .pipe(gulp.dest(commonPath))
        .on('error', logError);
}

function getPublicTsWatchTask() {
    return (file) => watchSrc(file, 'public:ts:watch')
        .pipe(sourcemaps.init())
            .pipe(systemIndex({ root: rootPath, srcFolder: srcPath, destFolder: publicPath }))
            .pipe(createPublicTsProject()())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(publicPath))
        .on('error', logError);
}

function startPublicTsWatch() {
    return startWatch(publicTsSrc, getPublicTsWatchTask());
}

function getCommonTsWatchTask() {
    return (file) => watchCommon(file, 'common:ts:watch')
        .pipe(sourcemaps.init())
            .pipe(createCommonTsProject()())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(commonPath))
        .on('error', logError);
}

function startCommonTsWatch() {
    return startWatch(commonTsSrc, getCommonTsWatchTask());
}

function createPublicTsProject(opts = {}) {
    return tsc.createProject(rootPath + 'tsconfig.json', opts);
}

function createCommonTsProject(opts = {}) {
    return tsc.createProject(commonPath + 'tsconfig.json', opts);
}

export {
    startPublicTsWatch,
    startCommonTsWatch,
};