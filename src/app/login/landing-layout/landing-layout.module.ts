import { NgModule } from '@angular/core';

import { LandingLayoutComponent } from './landing-layout.component';
import { LoginComponent } from './login/login.component';
import { LoginBoxComponent } from './login-box/login-box.component';
import { LoginFormComponent } from './login-form/login-form.component';

const components = [
    LandingLayoutComponent,
    LoginComponent,
    LoginBoxComponent,
    LoginFormComponent,
];

@NgModule({
    declarations: components,
    exports: components,
})
class LoginLayoutModule {}

export {
    components,
    LoginLayoutModule,
};