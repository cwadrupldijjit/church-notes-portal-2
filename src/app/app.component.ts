import { Component,
         ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    moduleId: module.id,
    selector: 'app',
    styleUrls: [
        './global.styles.css',
    ],
    template: `
        <left-nav></left-nav>
        <router-outlet></router-outlet>
    `,
})
class AppComponent {}

export {
    AppComponent,
};