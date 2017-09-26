import * as gulp from 'gulp';

import { onProduction } from './server/config';

import './build/modules';

gulp.task('default', gulp.series(onProduction ? 'build:prod' : 'build:dev'));