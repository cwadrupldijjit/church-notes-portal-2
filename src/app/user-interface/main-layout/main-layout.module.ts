import { NgModule } from '@angular/core';

import { components } from './index';

@NgModule({
    declarations: components,
    exports: components,
})
class MainLayoutModule {}

export default MainLayoutModule;