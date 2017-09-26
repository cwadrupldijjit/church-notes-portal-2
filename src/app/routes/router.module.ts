import { NgModule } from '@angular/core';
import { RouterModule,
         Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingLayoutComponent } from '../login/landing-layout/landing-layout.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'landing', component: LandingLayoutComponent },
    { path: 'register', component: RegistrationComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})
class RoutingModule {}

export default RoutingModule;