import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import RouteModule from './routes/router.module';

import { UserInterfaceModule } from './user-interface/index';
import { LoginLayoutModule } from './login/login-layout/login-layout.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { LoginMainComponent } from './routes/login-main/login-main.component';
import { RegistrationComponent } from './routes/registration/registration.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@NgModule({
    bootstrap: [ AppComponent ],
    entryComponents: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        LoginMainComponent,
        RegistrationComponent,
    ],
    imports: [
        BrowserModule,
        RouteModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        UserInterfaceModule,
        LoginLayoutModule,
    ],
})
class AppModule {}

export default AppModule;