import { NgModule } from '@angular/core';

import MainLayoutModule from './main-layout/main-layout.module';
import { components as mainLayoutComponents } from './main-layout/index';

const components = [
    
];

@NgModule({
    imports: [ MainLayoutModule ],
    declarations: components,
    exports: [
        components,
        ...mainLayoutComponents,
    ],
})
class UserInterfaceModule {}

export {
    UserInterfaceModule,
};