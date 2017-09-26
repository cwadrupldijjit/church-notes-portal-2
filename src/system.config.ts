System.config({
    map: {
        'app': '/',
        'common': 'common',
        
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
        '@angular/cdk': 'npm:@angular/cdk/bundles/cdk.umd.js',
        
        'hammerjs': 'npm:hammerjs',
        'rxjs': 'npm:rxjs',
        'socket.io': 'npm:socket.io',
    },
    packages: {
        'app': {
            defaultExtension: 'js',
            main: './app/index.js',
        },
        'common': {
            defaultExtension: 'js',
        },
        rxjs: {
            defaultExtension: 'js',
            main: 'Rx.js',
        },
        hammerjs: {
            defaultExtension: 'js',
            main: './hammer.js',
        },
    },
    paths: {
        'npm:': '/node_modules/',
    },
});