import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import RouteModule from './routes/router.module';

import { UserInterfaceModule } from './user-interface/index';
import { LandingLayoutModule } from './landing-layout/landing-layout.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { RegistrationComponent } from './routes/registration/registration.component';

import { AuthService, AuthInterceptor, AuthStorageService } from './auth';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@NgModule({
    bootstrap: [ AppComponent ],
    entryComponents: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        RegistrationComponent,
    ],
    imports: [
        BrowserModule,
        RouteModule,
        FormsModule,
        HttpClientModule,
        UserInterfaceModule,
        LandingLayoutModule,
    ],
    providers: [
        AuthService,
        AuthStorageService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
})
class AppModule {}

export default AppModule;