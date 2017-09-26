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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5c3RlbS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNWLEdBQUcsRUFBRTtRQUNELEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLFFBQVE7UUFFbEIsaUJBQWlCLEVBQUUsMkNBQTJDO1FBQzlELG1CQUFtQixFQUFFLCtDQUErQztRQUNwRSxlQUFlLEVBQUUsdUNBQXVDO1FBQ3hELGdCQUFnQixFQUFFLHlDQUF5QztRQUMzRCxlQUFlLEVBQUUsdUNBQXVDO1FBQ3hELG1CQUFtQixFQUFFLCtDQUErQztRQUNwRSwyQkFBMkIsRUFBRSwrREFBK0Q7UUFDNUYsbUNBQW1DLEVBQUUsK0VBQStFO1FBQ3BILGlCQUFpQixFQUFFLDJDQUEyQztRQUM5RCxxQkFBcUIsRUFBRSxtREFBbUQ7UUFDMUUsY0FBYyxFQUFFLHFDQUFxQztRQUVyRCxVQUFVLEVBQUUsY0FBYztRQUMxQixNQUFNLEVBQUUsVUFBVTtRQUNsQixXQUFXLEVBQUUsZUFBZTtLQUMvQjtJQUNELFFBQVEsRUFBRTtRQUNOLEtBQUssRUFBRTtZQUNILGdCQUFnQixFQUFFLElBQUk7WUFDdEIsSUFBSSxFQUFFLGdCQUFnQjtTQUN6QjtRQUNELFFBQVEsRUFBRTtZQUNOLGdCQUFnQixFQUFFLElBQUk7U0FDekI7UUFDRCxJQUFJLEVBQUU7WUFDRixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLElBQUksRUFBRSxPQUFPO1NBQ2hCO1FBQ0QsUUFBUSxFQUFFO1lBQ04sZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixJQUFJLEVBQUUsYUFBYTtTQUN0QjtLQUNKO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLGdCQUFnQjtLQUMzQjtDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJzeXN0ZW0uY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiU3lzdGVtLmNvbmZpZyh7XHJcbiAgICBtYXA6IHtcclxuICAgICAgICAnYXBwJzogJy8nLFxyXG4gICAgICAgICdjb21tb24nOiAnY29tbW9uJyxcclxuICAgICAgICBcclxuICAgICAgICAnQGFuZ3VsYXIvY29tbW9uJzogJ25wbTpAYW5ndWxhci9jb21tb24vYnVuZGxlcy9jb21tb24udW1kLmpzJyxcclxuICAgICAgICAnQGFuZ3VsYXIvY29tcGlsZXInOiAnbnBtOkBhbmd1bGFyL2NvbXBpbGVyL2J1bmRsZXMvY29tcGlsZXIudW1kLmpzJyxcclxuICAgICAgICAnQGFuZ3VsYXIvY29yZSc6ICducG06QGFuZ3VsYXIvY29yZS9idW5kbGVzL2NvcmUudW1kLmpzJyxcclxuICAgICAgICAnQGFuZ3VsYXIvZm9ybXMnOiAnbnBtOkBhbmd1bGFyL2Zvcm1zL2J1bmRsZXMvZm9ybXMudW1kLmpzJyxcclxuICAgICAgICAnQGFuZ3VsYXIvaHR0cCc6ICducG06QGFuZ3VsYXIvaHR0cC9idW5kbGVzL2h0dHAudW1kLmpzJyxcclxuICAgICAgICAnQGFuZ3VsYXIvbWF0ZXJpYWwnOiAnbnBtOkBhbmd1bGFyL21hdGVyaWFsL2J1bmRsZXMvbWF0ZXJpYWwudW1kLmpzJyxcclxuICAgICAgICAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic6ICducG06QGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9idW5kbGVzL3BsYXRmb3JtLWJyb3dzZXIudW1kLmpzJyxcclxuICAgICAgICAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJzogJ25wbTpAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMudW1kLmpzJyxcclxuICAgICAgICAnQGFuZ3VsYXIvcm91dGVyJzogJ25wbTpAYW5ndWxhci9yb3V0ZXIvYnVuZGxlcy9yb3V0ZXIudW1kLmpzJyxcclxuICAgICAgICAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc6ICducG06QGFuZ3VsYXIvYW5pbWF0aW9ucy9idW5kbGVzL2FuaW1hdGlvbnMudW1kLmpzJyxcclxuICAgICAgICAnQGFuZ3VsYXIvY2RrJzogJ25wbTpAYW5ndWxhci9jZGsvYnVuZGxlcy9jZGsudW1kLmpzJyxcclxuICAgICAgICBcclxuICAgICAgICAnaGFtbWVyanMnOiAnbnBtOmhhbW1lcmpzJyxcclxuICAgICAgICAncnhqcyc6ICducG06cnhqcycsXHJcbiAgICAgICAgJ3NvY2tldC5pbyc6ICducG06c29ja2V0LmlvJyxcclxuICAgIH0sXHJcbiAgICBwYWNrYWdlczoge1xyXG4gICAgICAgICdhcHAnOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRFeHRlbnNpb246ICdqcycsXHJcbiAgICAgICAgICAgIG1haW46ICcuL2FwcC9pbmRleC5qcycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnY29tbW9uJzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0RXh0ZW5zaW9uOiAnanMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcnhqczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0RXh0ZW5zaW9uOiAnanMnLFxyXG4gICAgICAgICAgICBtYWluOiAnUnguanMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFtbWVyanM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdEV4dGVuc2lvbjogJ2pzJyxcclxuICAgICAgICAgICAgbWFpbjogJy4vaGFtbWVyLmpzJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBhdGhzOiB7XHJcbiAgICAgICAgJ25wbTonOiAnL25vZGVfbW9kdWxlcy8nLFxyXG4gICAgfSxcclxufSk7Il19
