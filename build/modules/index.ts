import * as gulp from 'gulp';
import * as del from 'del';

import { publicPath,
         commonPath,
         everythingGlob } from './paths.build';

import * as tsc from './typescript.build';
import * as scss from './sass.build';
import * as html from './html.build';
import * as assets from './assets.build';
import * as watch from './watch-tasks.build';

gulp.task('build:dev:transpile', gulp.series(
    gulp.parallel(
        'tsc:public:dev',
        'tsc:common:dev',
        'scss:dev',
        'html:dev',
        'assets:dev'
    ),
    'watch'
));
gulp.task('build:prod:transpile',
    gulp.parallel(
        'tsc:public:prod',
        'tsc:common:prod',
        'scss:prod',
        'html:prod',
        'assets:prod'
    )
);

gulp.task('clean:public', () => {
    return del(publicPath + everythingGlob);
});
gulp.task('clean:common', () => {
    return del([
        commonPath + everythingGlob + '.js',
        commonPath + everythingGlob + '.d.ts'
    ]);
});

gulp.task('clean', gulp.parallel('clean:public', 'clean:common'));

gulp.task('build:dev', gulp.series('clean', 'build:dev:transpile'));
gulp.task('build:prod', gulp.series('clean', 'build:prod:transpile'));

export {
    tsc,
    scss,
    html,
    assets,
    watch
};