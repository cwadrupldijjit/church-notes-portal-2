import * as path from 'path';

const buildPath = __dirname + '/../';
const rootPath = buildPath + '../';
const publicPath = rootPath + 'public/';
const commonPath = rootPath + 'common/';
const srcPath = rootPath + 'src/';

const everythingGlob = '**/*';

const publicTsSrc = [
    constructSrcPath('.ts').replace('*.ts', '!(system.config)*.ts'),
    path.normalize(srcPath + '/system.config.ts'),
];
const commonTsSrc = [
    commonPath + everythingGlob + '.ts',
    '!' + commonPath + everythingGlob + '.d.ts',
];
const scssSrc = constructSrcPath('.scss');
const htmlSrc = constructSrcPath('.html');
const assetSrc = [
    constructSrcPath(),
    ...[ ...publicTsSrc, scssSrc, htmlSrc ].map(negatePath),
];

function constructSrcPath(ext = '') {
    return srcPath + everythingGlob + ext;
}

function negatePath(p: string) {
    return '!' + p;
}

export {
    buildPath,
    rootPath,
    publicPath,
    srcPath,
    everythingGlob,
    constructSrcPath,
    negatePath,
    publicTsSrc,
    commonPath,
    commonTsSrc,
    scssSrc,
    htmlSrc,
    assetSrc,
};